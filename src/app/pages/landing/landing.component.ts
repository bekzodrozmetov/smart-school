import { Component } from '@angular/core';
import { FeaturesComponent } from './components/features/features.component';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { AppTopbar } from "../../layout/component/app.topbar";
import { HeroComponent } from "./components/hero/hero.component";
import { PricingComponent } from "./components/pricing/pricing.component";
import { HighlightsComponent } from "./components/highlights/highlights.component";
import { AppFooter } from "../../layout/component/app.footer";
import { TopbarComponent } from "./components/topbar/topbar.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RippleModule, StyleClassModule, ButtonModule, DividerModule, HeroComponent, FeaturesComponent, PricingComponent, HighlightsComponent, AppFooter, TopbarComponent],
  templateUrl: './landing.component.html'
})
export class LandingComponent {}
