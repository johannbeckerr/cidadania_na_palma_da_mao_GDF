import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MobilidadePage } from '../z_internas/mobilidade/mobilidade';
import { SaudePage } from '../z_internas/saude/saude';
import { EducacaoPage } from '../z_internas/educacao/educacao';
import { SegurancaPage } from '../z_internas/seguranca/seguranca';
import { SaneamentoPage } from '../z_internas/saneamento/saneamento';
import { CebPage } from '../z_internas/ceb/ceb';
import { EsportePage } from '../z_internas/esporte/esporte';
import { CodhabPage } from '../z_internas/codhab/codhab';
import { OuvidoriaPage } from '../z_internas/ouvidoria/ouvidoria';
import { EmergenciaPage } from '../z_internas/emergencia/emergencia';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  irParaMobilidade(){
    this.navCtrl.push(MobilidadePage);
  }
  irParaSaude(){
    this.navCtrl.push(SaudePage);
  }
  irParaEducacao(){
    this.navCtrl.push(EducacaoPage);
  }
  irParaSeguranca(){
    this.navCtrl.push(SegurancaPage);
  }
  irParaSaneamento(){
    this.navCtrl.push(SaneamentoPage);
  }
  irParaCeb(){
    this.navCtrl.push(CebPage);
  }
  irParaEsporte(){
    this.navCtrl.push(EsportePage);
  }
  irParaCodhab(){
    this.navCtrl.push(CodhabPage);
  }
  irParaOuvidoria(){
    this.navCtrl.push(OuvidoriaPage);
  }
  irParaEmergencia(){
    this.navCtrl.push(EmergenciaPage);
  }

}
