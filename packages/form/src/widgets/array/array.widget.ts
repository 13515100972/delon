import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormProperty } from '../../model/form.property';
import { ArrayLayoutWidget } from '../../widget';

@Component({
  selector: 'sf-array',
  templateUrl: './array.widget.html',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
})
export class ArrayWidget extends ArrayLayoutWidget implements OnInit {
  addTitle: string;
  addType: string;
  removeTitle: string | null;
  arraySpan = 8;

  get addDisabled() {
    return this.schema.maxItems && (this.formProperty.properties as FormProperty[]).length >= this.schema.maxItems;
  }

  ngOnInit(): void {
    const { grid, addTitle, addType, removable, removeTitle } = this.ui;
    if (grid && grid.arraySpan) {
      this.arraySpan = grid.arraySpan;
    }

    this.addTitle = addTitle || this.l.addText;
    this.addType = addType || 'dashed';
    this.removeTitle = removable === false ? null : removeTitle || this.l.removeText;
  }

  addItem() {
    this.formProperty.add(null!);
  }

  removeItem(index: number) {
    this.formProperty.remove(index);
  }
}
