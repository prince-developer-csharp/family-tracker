import { Injectable } from '@angular/core';
import { FamilyMember } from '../../../../shared/models/family-member.model';

@Injectable({
  providedIn: 'root',
})
export class FamilyMemberService {
  private members: FamilyMember[] = [
    {
      id: '1',
      name: 'John Doe',
      age: 40,
      relation: 'Father',
      salary: 95000,
    },
    {
      id: '2',
      name: 'Jane Doe',
      age: 38,
      relation: 'Mother',
      salary: 72000,
    },
    {
      id: '3',
      name: 'Michael Doe',
      age: 15,
      relation: 'Son',
      salary: 0,
    },
    {
      id: '4',
      name: 'Emily Doe',
      age: 12,
      relation: 'Daughter',
      salary: 0,
    },
    {
      id: '5',
      name: 'Grandpa Joe',
      age: 68,
      relation: 'Grandfather',
      salary: 0,
    },
  ];

  getMembers(): FamilyMember[] {
    return this.members;
  }

  getMemberById(id: string): FamilyMember | undefined {
    return this.members.find((member) => member.id === id);
  } 

  addMember(member: FamilyMember): void {
    this.members.push(member);
  } 

  updateMember(updatedMember: FamilyMember): void {
    const index = this.members.findIndex((m) => m.id === updatedMember.id);
    if (index !== -1) {
      this.members[index] = updatedMember;
    }
  }
}
