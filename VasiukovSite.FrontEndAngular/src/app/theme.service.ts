import {Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private renderer: Renderer2;
  private currentTheme: 'light-theme' | 'dark-theme' = 'dark-theme';

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);


  const savedTheme = localStorage.getItem('app-theme') as 'light-theme' | 'dark-theme' | null;

  if (savedTheme){
    this.currentTheme = savedTheme;

  }
  this.applyTheme(this.currentTheme);
}



  setTheme(theme: 'light-theme' | 'dark-theme'){
    if (this.currentTheme === theme) return;

    this.removeTheme(this.currentTheme);
    this.applyTheme(theme);
    this.currentTheme = theme;
    localStorage.setItem('app-theme', theme);
  }

private applyTheme(theme: 'light-theme' | 'dark-theme'){
  const body = document.body;
  this.renderer.addClass(body, theme);
}

private removeTheme(theme: 'light-theme' | 'dark-theme'){
  const body = document.body;
  this.renderer.removeClass(body,theme);
}

  getCurrentTheme(): string {
    return this.currentTheme;
  }


}

