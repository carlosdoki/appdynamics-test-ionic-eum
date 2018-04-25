import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Database } from '../../providers/database/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

   public hasComics     : boolean = false;
   public comics        : any;

   constructor( public navCtrl    : NavController,
              public DB       : Database)
   {

   }



   ionViewWillEnter()
   {
      this.displayComics();
   }



   displayComics()
   {
      this.DB.retrieveComics().then((data)=>
      {
         let existingData = Object.keys(data).length;
         if(existingData !== 0)
   {
            this.hasComics  = true;
            this.comics   = data;
   }
   else
   {
      console.log("we get nada!");
   }
      });
   }



   addCharacter()
   {
      this.navCtrl.push('Add');
   }



   viewCharacter(param)
   {
      this.navCtrl.push('Add', param);
   }

}