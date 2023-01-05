import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  @Input()
  public title = '';

  constants = {
    DATA_THEME: 'data-theme',
    THEME: 'theme'
  }

  themeType = {
    LIGHT: "light",
    DARK: "dark"
  }

  constructor() {
  }

  currentTheme() {
    return document.body.getAttribute(this.constants.DATA_THEME);
  }

  switchThemeColor() {
    const theme = this.currentTheme() === this.themeType.LIGHT
      ? this.themeType.DARK
      : this.themeType.LIGHT;

    document.body.setAttribute(this.constants.DATA_THEME, theme);;
    localStorage.setItem(this.constants.THEME, theme);
  }
}
