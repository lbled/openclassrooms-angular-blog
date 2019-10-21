import {Component} from '@angular/core';
import {Post} from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    new Post('Mon premier post',
      'Qui cum venisset ob haec festinatis itineribus Antiochiam, praestrictis palatii ianuis, contempto Caesare, ' +
      'quem videri decuerat, ad praetorium cum pompa sollemni perrexit morbosque diu causatus nec regiam introiit nec processit in ' +
      'publicum, sed abditus multa in eius moliebatur exitium addens quaedam relationibus supervacua.'),
    new Post('Mon deuxième post',
      'Sed laeditur hic coetuum magnificus splendor levitate paucorum incondita, ubi nati sunt non reputantium, ' +
      'sed tamquam indulta licentia vitiis ad errores lapsorum ac lasciviam. ut enim Simonides lyricus docet, ' +
      'beate perfecta ratione vieturo ante alia patriam esse convenit gloriosam.'),
    new Post('Encore un post',
      'Hinc ille commotus ut iniusta perferens et indigna praefecti custodiam protectoribus mandaverat fidis.'),
    new Post('', ''),
    new Post('', '')
  ];
}
