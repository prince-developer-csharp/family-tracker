export interface Expense {
  id: number;       // Unique identifier
  amount: number;            // Expense or income amount
  category: string;          // E.g., Food, Rent, Transport
  description: string;       // Optional short note
  date: string;              // Date of the expense in ISO format 
}
