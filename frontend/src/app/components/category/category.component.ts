import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { GoalService } from 'src/app/service/goal-service.service';
import { IGoalModelAngular } from 'src/app/share/model/IGoalModelAngular';
import { ProgressEnum } from 'src/app/share/enum/ProgressEnum';
import { CategoryEnum } from 'src/app/share/enum/CategoryEnum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  goalsObservable: Observable<IGoalModelAngular[]>;
  goals: IGoalModelAngular[] = [];
  goalsListCopy: IGoalModelAngular[] = [];
  Progress = ProgressEnum;
  categories: CategoryEnum[];
  checked = false;
  firstCategoryWithGoal: CategoryEnum | undefined;

  constructor(private goalService: GoalService,private router: Router, activatedRoute: ActivatedRoute) {
    this.Progress = ProgressEnum;
    this.categories = Object.values(CategoryEnum);
    // This is for getting all of the goals
    this.goalsObservable = goalService.getAllGoals();
  }
  
  ngOnInit() {
    this.goalsObservable.subscribe((result) => {
        this.goals = result;
        this.goalsListCopy = this.goals;  // save the full list of goals in a separate copy
        this.firstCategoryWithGoal = this.findFirstCategoryWithGoal()
      })
    this.getCheckboxStatus()
  }

  handleHideCheckbox() {
    this.checked = !this.checked
    this.getCheckboxStatus()
    this.hideCompletedGoals()
  }

  getCheckboxStatus() {
    if (this.checked) {
      console.log('Checkbox is checked');
    } else {
      console.log('Checkbox is aaa not checked');
    }
  }

  hideCompletedGoals() {
    if (this.checked) {
      console.log("filtering out completed goals")
      this.goals = this.goals.filter(goal => goal.progress != ProgressEnum.Completed);
    } else {
      console.log("showing all goals")
      this.goals = this.goalsListCopy  // show all goals again using hard copy
    }
  }

  deleteGoal(goalId: string): void{
    this.goalService.deleteGoal(goalId).subscribe((result) => {
      // Refresh the goals list after successful deletion
      this.goalsObservable.subscribe((result) => {
        this.goals = result;
      })
    });
  }

  openEditGoal(goal: IGoalModelAngular): void {
    // Navigate to the edit goal component passing the goal ID as a parameter
    this.router.navigate(['/update', goal.goalId]);
  }

  // this function aims to find the first category with goals (so it's not collapsed when page is rendered)
  findFirstCategoryWithGoal(): CategoryEnum | undefined {
    return this.categories.find(category => this.goals.some(goal => goal.category == category));
  }

  hasGoalsInCategories(currCategory: string[]): boolean {
    return this.goals.some(goal => currCategory.includes(goal.category));
  }

}
