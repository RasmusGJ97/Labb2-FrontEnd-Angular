import { NgModule } from "@angular/core";
import{FormsModule} from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "../app.component";
import { CreateEditPageComponent } from "../create-edit-page/create-edit-page.component";



@NgModule({
    declarations:[
        // AppComponent,
        // CreateEditPageComponent
    ],
    imports:[
        BrowserModule,
        HttpClientModule,
        FormsModule
    ],
    providers:[],
    // bootstrap:[AppComponent]
})
export class AppModule{}