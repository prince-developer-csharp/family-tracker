export interface Expense {
  id: string | number;       // Unique identifier
  amount: number;            // Expense or income amount
  category: string;          // E.g., Food, Rent, Transport
  description: string;       // Optional short note
}
