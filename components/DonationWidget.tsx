"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Shield, Lock } from "lucide-react";
import Button from "./Button";

interface DonationWidgetProps {
  language: "en" | "es";
  onSubmit?: (amount: number, currency: string, email?: string) => void;
}

export default function DonationWidget({ language, onSubmit }: DonationWidgetProps) {
  const [selectedAmount, setSelectedAmount] = useState(1);
  const [customAmount, setCustomAmount] = useState("");
  const [currency, setCurrency] = useState<"USD" | "EUR">("USD");
  const [email, setEmail] = useState("");
  const [wantsUpdates, setWantsUpdates] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const presetAmounts = [1, 5, 10, 25, 50, 100];

  const content = {
    en: {
      title: "Make Your Contribution",
      amountLabel: "Select Amount",
      customLabel: "Custom Amount",
      emailLabel: "Email (optional)",
      updatesLabel: "I want to receive updates",
      submitButton: "Contribute Now",
      securityNote: "Secure Payment • Encrypted Connection",
      successMessage: "Thank you for your contribution!",
    },
    es: {
      title: "Haz tu contribución",
      amountLabel: "Selecciona un monto",
      customLabel: "Monto personalizado",
      emailLabel: "Email (opcional)",
      updatesLabel: "Quiero recibir actualizaciones",
      submitButton: "Contribuir ahora",
      securityNote: "Pago seguro • Conexión cifrada",
      successMessage: "¡Gracias por tu contribución!",
    },
  };

  const t = content[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = customAmount ? parseFloat(customAmount) : selectedAmount;
    if (onSubmit) {
      onSubmit(amount, currency, email || undefined);
    }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const finalAmount = customAmount ? parseFloat(customAmount) : selectedAmount;
  const symbol = currency === "USD" ? "$" : "€";

  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        className="bg-muted/30 backdrop-blur-sm border border-muted/20 rounded-2xl p-6 md:p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-foreground">{t.title}</h3>

        <form onSubmit={handleSubmit}>
          {/* Currency Toggle */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex rounded-lg bg-muted/50 p-1">
              {(["USD", "EUR"] as const).map((curr) => (
                <button
                  key={curr}
                  type="button"
                  onClick={() => setCurrency(curr)}
                  className={`px-6 py-2 rounded-md font-medium transition-all ${
                    currency === curr
                      ? "bg-accent shadow-lg"
                      : "text-foreground/60 hover:text-foreground"
                  }`}
                  style={currency === curr ? { color: '#0f172a' } : undefined}
                >
                  {curr}
                </button>
              ))}
            </div>
          </div>

          {/* Preset Amounts */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-3 text-foreground">{t.amountLabel}</label>
            <div className="grid grid-cols-3 gap-3">
              {presetAmounts.map((amount) => {
                const isSelected = selectedAmount === amount && !customAmount;
                return (
                  <motion.button
                    key={amount}
                    type="button"
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount("");
                    }}
                    className={`relative px-4 py-3 rounded-lg font-semibold transition-all border-2 ${
                      isSelected
                        ? "bg-accent text-white border-accent shadow-lg shadow-accent/30"
                        : "bg-muted/20 text-foreground border-muted/40 hover:border-accent/50 hover:bg-muted/30"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className={isSelected ? "text-slate-900 font-bold" : ""}>
                      {symbol}{amount}
                    </span>
                    {isSelected && (
                      <motion.div
                        className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                      >
                        <Check className="w-3 h-3 text-white" />
                      </motion.div>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Custom Amount */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2 text-foreground">{t.customLabel}</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/50 text-lg">
                {symbol}
              </span>
              <input
                type="number"
                min="1"
                step="0.01"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-background text-foreground border border-muted/30 rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                placeholder="0.00"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-foreground">{t.emailLabel}</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-background text-foreground border border-muted/30 rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
              placeholder="you@example.com"
            />
          </div>

          {/* Updates Toggle */}
          <div className="mb-6">
            <label className="flex items-center space-x-3 cursor-pointer">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={wantsUpdates}
                  onChange={(e) => setWantsUpdates(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-muted/50 rounded-full peer-checked:bg-accent transition-all"></div>
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
              </div>
              <span className="text-sm text-foreground/70">{t.updatesLabel}</span>
            </label>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={!finalAmount || finalAmount < 1}
            variant="primary"
            size="lg"
            className="w-full"
          >
            {t.submitButton} {finalAmount >= 1 && `• ${symbol}${finalAmount.toFixed(2)}`}
          </Button>

          {/* Security Note */}
          <div className="mt-4 flex items-center justify-center space-x-2 text-sm text-foreground/50">
            <Lock className="w-4 h-4" />
            <span>{t.securityNote}</span>
          </div>
        </form>

        {/* Success Message */}
        <AnimatePresence>
          {submitted && (
            <motion.div
              className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center justify-center space-x-2 text-green-600 dark:text-green-400"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <Check className="w-5 h-5" />
              <span className="font-medium">{t.successMessage}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Trust Indicators */}
      <div className="mt-8 grid grid-cols-3 gap-4">
        {[
          { icon: Shield, label: language === "en" ? "Secure" : "Seguro" },
          { icon: Lock, label: language === "en" ? "Encrypted" : "Cifrado" },
          { icon: Check, label: language === "en" ? "Verified" : "Verificado" },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center text-center p-4 bg-muted/20 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <item.icon className="w-6 h-6 text-accent mb-2" />
            <span className="text-xs text-foreground/60">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
