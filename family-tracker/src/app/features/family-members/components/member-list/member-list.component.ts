import { Component, OnInit } from '@angular/core';
import { FamilyMemberService } from '../../services/family-member/family-member.service';
import { FamilyMember } from '../../../../shared/models/family-member.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-list',
  imports: [CommonModule],
  templateUrl: './member-list.component.html',
  styleUrl: './member-list.component.css',
})
export class MemberListComponent implements OnInit {
  members: FamilyMember[] = [];
  constructor(private familyMemberService: FamilyMemberService, private router: Router) {}
  ngOnInit(): void {
    this.members = this.familyMemberService.getMembers();
  }
  getImage(id: string): string {
    return `https://i.pravatar.cc/150?img=${parseInt(id) * 5}`;
  }

  // helper: relation → color + icon
  getColor(relation: string): string {
    switch (relation.toLowerCase()) {
      case 'father':
        return 'text-blue-500 border-blue-200';
      case 'mother':
        return 'text-pink-500 border-pink-200';
      case 'son':
        return 'text-green-500 border-green-200';
      case 'daughter':
        return 'text-purple-500 border-purple-200';
      case 'grandfather':
        return 'text-yellow-500 border-yellow-200';
      default:
        return 'text-gray-500 border-gray-200';
    }
  }

  getIcon(relation: string): string {
    switch (relation.toLowerCase()) {
      case 'father':
        return 'family_restroom';
      case 'mother':
        return 'favorite';
      case 'son':
        return 'sports_soccer';
      case 'daughter':
        return 'palette';
      case 'grandfather':
        return 'self_improvement';
      default:
        return 'person';
    }
  }

  addMember() {
    console.log('Navigating to add member form'); 
    this.router.navigate(['/family-members/add']);
  }

  editMember(id: string) {
    this.router.navigate(['/family-members/edit', id]);
  }

  getTotalSalary(): number {
  return this.members.reduce((total, member) => total + (member.salary || 0), 0);
}

}
