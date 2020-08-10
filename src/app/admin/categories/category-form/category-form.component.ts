import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryRepository} from '../../../model/category.repository';
import {NgForm} from '@angular/forms';
import {Category} from '../../../model/category.model';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  editing: boolean = false;
  category: Category = new Category();

  constructor(
    private activeRoute: ActivatedRoute,
    private categoryRepository: CategoryRepository,
    private router: Router
  ) {
    this.editing = activeRoute.snapshot.params.mode === 'edit';

    if (this.editing) {
      this.category = categoryRepository.getCategory(activeRoute.snapshot.params.id);
    }
  }

  ngOnInit() { }

  save(form: NgForm) {
    this.categoryRepository.saveCategory(this.category);
    this.router.navigateByUrl('/admin/main/categories');
  }

}
