import {ChangeDetectionStrategy, Component} from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { LanguageSwitcherComponent } from '../../../public/components/language-switcher/language-switcher.component';
import {TranslatePipe} from '@ngx-translate/core';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';

@Component({
  selector: 'app-toolbar-content',
  imports: [
    MatToolbar,
    LanguageSwitcherComponent,
    TranslatePipe,
    MatIcon,
    MatIconButton
  ],
  templateUrl: './toolbar-content.component.html',
  styleUrl: './toolbar-content.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ToolbarContentComponent {
  menuOpen = false;
  scrollTo(fragment: string): void {
    const element = document.getElementById(fragment);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
