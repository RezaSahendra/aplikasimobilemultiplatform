import { BrowserModule } from '@angular/platform-browser'; 
import { ErrorHandler, NgModule } from '@angular/core'; 
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular'; 
import { SplashScreen } from '@ionic-native/splash-screen'; 
import { StatusBar } from '@ionic-native/status-bar'; 
 
import { MyApp } from './app.component'; 
import { HomePage } from '../pages/home/home'; 
import { AuthProvider } from '../providers/auth/auth'; 
import { AlertProvider } from '../providers/alert/alert'; 
// import { ProductProvider } from '../providers/product/product'; 
// import { FavoriteProductProvider } from '../providers/favorite-product/favorite-product'; 
import { EnvProvider } from '../providers/env/env'; 
 
import { RegisterPage } from '../pages/register/register'; 
import { LoginPage } from '../pages/login/login'; 
import { HttpClientModule } from '@angular/common/http'; 
 
@NgModule({   
  declarations: [     
    MyApp,     
    HomePage,     
    RegisterPage,     
    LoginPage   
  ],   
  imports: [     
    BrowserModule,     
    HttpClientModule,     
    IonicModule.forRoot(MyApp)   
  ],   
  bootstrap: [IonicApp],   
  entryComponents: [     
    MyApp,     
    HomePage,     
    RegisterPage,     
    LoginPage   
  ],   
  providers: [     
    StatusBar,
    SplashScreen,     
    {provide: ErrorHandler, useClass: IonicErrorHandler},     
    AuthProvider,     
    AlertProvider,     
    // ProductProvider,     
    // FavoriteProductProvider,     
    EnvProvider   
  ] 
}) 
export class AppModule {}