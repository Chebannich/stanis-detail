export type PricingTier = {
  name: string,
  price: number,
  benefits: string[],
  featured?: boolean,
}

export const pricingTiers: PricingTier[] = [
  {
    name: 'Basic',
    price: 49,
    benefits: ['Saugen & Absaugen aller Bereiche', 'Armaturenbrett & Mittelkonsole gereinigt', 'Innenscheiben streifenfrei', 'Türeinstiege & Fußmatten'],
  },
  {
    name: 'Standard',
    price: 89,
    benefits: ['Alles aus Basic', 'Polsterreinigung (Stoff oder Leder)', 'Geruchsneutralisierung', 'Kunststoffpflege & Auffrischung'],
    featured: true,
  },
  {
    name: 'Premium',
    price: 149,
    benefits: ['Alles aus Standard', 'Tiefenreinigung Teppich & Polster', 'Lederpflege mit Imprägnierung', 'Detailarbeiten (Lüftungsschlitze, Nähte)'],
  }
]