import { type ContactRequest, type InsertContactRequest, contactRequests } from "@shared/schema";
import { db } from "./db";

export interface IStorage {
  createContactRequest(request: InsertContactRequest): Promise<ContactRequest>;
}

export class DatabaseStorage implements IStorage {
  async createContactRequest(request: InsertContactRequest): Promise<ContactRequest> {
    const [result] = await db.insert(contactRequests).values(request).returning();
    return result;
  }
}

export const storage = new DatabaseStorage();
