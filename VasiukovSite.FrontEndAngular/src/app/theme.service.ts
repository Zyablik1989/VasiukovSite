import {Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private renderer: Renderer2;
  private currentTheme = 'dark-theme';
  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }



  setTheme(theme: 'light-theme' | 'dark-theme'){
    const body = document.body;
    // const a = document.
    this.renderer.removeClass(body, this.currentTheme);
    this.renderer.addClass(body,theme);
    this.currentTheme = theme;
  }

  getCurrentTheme(): string {
    return this.currentTheme;
  }


}

