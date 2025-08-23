import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FamilyMemberService } from '../../services/family-member/family-member.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FamilyMember } from '../../../../shared/models/family-member.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-member-form',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './member-form.component.html',
  styleUrl: './member-form.component.css'
})
export class MemberFormComponent {
  form!: FormGroup;
  editMode = false;

  constructor(
    private fb: FormBuilder,
    private service: FamilyMemberService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const memberId = this.route.snapshot.paramMap.get('id');
    const member = memberId ? this.service.getMemberById(memberId) : null;

    this.editMode = !!member;

    this.form = this.fb.group({
      id: [member?.id || '', Validators.required],
      name: [member?.name || '', Validators.required],
      age: [member?.age || '', [Validators.required, Validators.min(0)]],
      relation: [member?.relation || '', Validators.required],
      salary: [member?.salary || 0, [Validators.required, Validators.min(0)]],
    });
  }

  onSubmit() {
    if (this.form.invalid) return;

    const member: FamilyMember = this.form.value;

    if (this.editMode) {
      this.service.updateMember(member);
    } else {
      this.service.addMember(member);
    }

    this.router.navigate(['/family-members']);
  }
}
