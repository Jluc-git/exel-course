import {
  ExelComponent,
} from '@core/ExelComponent';

import {
  createTable,
} from '@/components/table/table.template';
import {
  resizeHandler,
}
  from '@/components/table/table.resize';
import {
  shouldResize,
}
  from '@/components/table/table.functions';

export class Table extends ExelComponent {
  static className = 'excel__table';

  constructor($root) {
    super($root, {
      listeners: ['mousedown'],
    });
  }

  toHTML() {
    return createTable();
  }


  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.$root, event);
    }
  }
}
