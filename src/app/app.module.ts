import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SobrePage } from '../pages/sobre/sobre';
import { LoginPage } from '../pages/login/login';
import { ContatoPage } from '../pages/contato/contato';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


//  Z_INTERNAS
import { MobilidadePageModule } from '../pages/z_internas/mobilidade/mobilidade.module';
import { EducacaoPageModule } from '../pages/z_internas/educacao/educacao.module';
import { SaneamentoPageModule } from '../pages/z_internas/saneamento/saneamento.module';
import { SaudePageModule } from '../pages/z_internas/saude/saude.module';
import { SegurancaPageModule } from '../pages/z_internas/seguranca/seguranca.module';
import { CebPageModule } from '../pages/z_internas/ceb/ceb.module';
import { EsportePageModule } from '../pages/z_internas/esporte/esporte.module';
import { CodhabPageModule } from '../pages/z_internas/codhab/codhab.module';
import { OuvidoriaPageModule } from '../pages/z_internas/ouvidoria/ouvidoria.module';
import { EmergenciaPageModule } from '../pages/z_internas/emergencia/emergencia.module';
//  Z_INTERNAS

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ContatoPage,
    SobrePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    EducacaoPageModule,
    MobilidadePageModule,
    SaneamentoPageModule,
    SaudePageModule,
    SegurancaPageModule,
    EmergenciaPageModule,
    CebPageModule,
    EsportePageModule,
    CodhabPageModule,
    OuvidoriaPageModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ContatoPage,
    SobrePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
