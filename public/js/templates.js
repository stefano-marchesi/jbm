angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("base/backend/layout/tpl.html","<dev-menu></dev-menu>\n<div layout=\"row\">\n\n  <admin-menu layout-padding></admin-menu>\n\n  <md-content flex>\n\n    <div flex data-ui-view layout-padding>\n    </div>\n\n  </md-content>\n\n</div>\n");
$templateCache.put("base/directives/adminMenu/tpl.html","<md-sidenav  class=\"md-sidenav-left md-whiteframe-z2\" md-component-id=\"left\" md-is-locked-open=\"$mdMedia(\'gt-md\')\">\n  <md-toolbar class=\"md-theme-indigo\">\n    <h1 class=\"md-toolbar-tools\"></h1>\n  </md-toolbar>\n  <md-content  >\n    <div layout=\"column\" layout-padding>\n\n        <md-button flex ng-repeat=\"item in items\" class=\"md-raised\" ui-sref=\"{{item.link}}\">{{item.text}}</md-button>\n\n    </div>\n\n  </md-content>\n</md-sidenav>\n");
$templateCache.put("base/directives/devMenu/tpl.html","<div layout=\"row\" layout-align=\"center center\">\n\n    <md-button ng-repeat=\"devMenuItem in devMenuItems\" ui-sref=\"{{devMenuItem.link}}\" class=\"md-primary\">{{devMenuItem.text}}</md-button>\n\n</div>\n");
$templateCache.put("base/directives/mainMenu/tpl.html","\n\n\n\n<md-toolbar>\n  <div class=\"md-toolbar-tools\" layout=\"row\" layout-align=\"space-between center\">\n\n    <md-button flex ng-repeat=\"mainMenuItem in mainMenuItems\" ui-sref=\"{{mainMenuItem.link}}\" class=\"md-raised md-primary\">{{mainMenuItem.text}}</md-button>\n\n  </div>\n</md-toolbar>\n");
$templateCache.put("base/directives/sidenav/tpl.html","<div layout=\"column\" layout-align=\"center center\">\n\n  <sponsor></sponsor>\n  <tags layout-fill></tags>\n\n\n</div>\n");
$templateCache.put("base/directives/slider/tpl.html","\n<div ng-if=\"loaded\" class=\"topslider\" style=\"margin-bottom:0px;\">\n  <div class=\"topslide\" ng-repeat=\"sliderItem in sliderItems\">\n    <img layout-fill ng-src=\"images/header/{{sliderItem}}\" >\n  </div>\n</div>\n");
$templateCache.put("base/directives/socialMenu/tpl.html","<div layout=\"row\" layout-align=\"center center\">\n  <md-button\n  ng-repeat=\"socialMenuItem in socialMenuItems\"\n  class=\"md-fab md-primary \"\n  ng-href=\"https://{{socialMenuItem.link}}\"\n  target=\"_blank\"\n  layout=\"row\" layout-align=\"center center\">\n  <div class=\"icon icon-{{socialMenuItem.icon}}\"></div>\n  </md-button>\n</div>\n");
$templateCache.put("base/directives/topMenu/tpl.html","<div layout=\"row\" layout-align=\"center center\">\n\n    <md-button ng-repeat=\"topMenuItem in topMenuItems\" ui-sref=\"{{topMenuItem.link}}\" class=\"md-raised md-primary\">{{topMenuItem.text}}</md-button>\n\n</div>\n");
$templateCache.put("base/frontend/home/tpl.html","<div layout-padding>\n  <md-grid-list md-cols=\"7\"\n                md-cols-sm=\"6\"\n\n                md-row-height=\"1:1\"\n                md-gutter=\"0px\">\n    <md-grid-tile\n                  class=\"tile\"\n                  ng-repeat=\"post in postList\"\n                  md-colspan=\"{{post.larghezza}}\"\n                  md-rowspan=\"{{post.altezza}}\"\n                  md-colspan-sm=\"{{post.larghezzaLPar}}\"\n                  md-rowspan-sm=\"{{post.altezzaLPar}}\"\n                  >\n      <div layout-fill style=\"\npadding-left:{{post.larghezza * multiplier}}px;\npadding-right:{{post.larghezza * multiplier}}px;\npadding-top:{{post.altezza * multiplier}}px;\npadding-bottom:{{post.altezza * multiplier}}px;\n\">\n\n        <a class=\"tile-image-container\" ng-href=\"/#/post/{{post._id}}\" layout-fill>\n          <img class=\"tile-image md-whiteframe-z2\" ng-src=\"images/copertina/{{post.copertina.nome}}\">\n          <div class=\"tile-footer-per\">\n            <h3>{{post.titolo}}</h3>\n            <div layout=\"row\" layout-align=\"space-between center\">\n              <p>{{post.tipo}}</p>\n              <p>{{post.date| date:\"dd/MM/yyyy \"}}</p>\n            </div>\n          </div>\n        </a>\n      </div>\n</div>\n</md-grid-tile>\n</md-grid-list>\n\n</div>\n");
$templateCache.put("base/frontend/layout/tpl.html","<div layout=\"column\">\n\n\n  <md-toolbar>\n    <div class=\"md-toolbar-tools\" layout=\"row\" layout-align=\"space-between center\">\n\n      <top-menu></top-menu>\n    <div class=\"logo-container\">\n      <img class=\"logo\" ng-src=\"2.png\">\n    </div>\n      <social-menu></social-menu>\n\n    </div>\n  </md-toolbar>\n\n  <slider></slider>\n\n  <main-menu layout-fill></main-menu>\n  <div class=\"section\" layout=\"column\" layout-gt-md=\"row\" >\n\n    <div flex data-ui-view></div>\n\n    <sidenav class=\"section\" ng-show=\"show\" flex-gt-sm=\"20\" ></sidenav>\n\n  </div>\n</div>\n");
$templateCache.put("comment/backend/list/tpl.html","<md-toolbar class=\"md-theme-indigo\" layout=\"row\" layout-align=\"space-around center\" >\n  <h1 class=\"md-toolbar-tools\">comment</h1>\n\n</md-toolbar>\n\n\n<md-list>\n  <md-item ng-repeat=\"item in items\">\n    <md-item-content class=\" md-whiteframe-z1\">\n      <div class=\"md-tile-content\">\n        <h4>{{item.date| date:\"dd/MM/yyyy \' alle \' H:mm\"}}</h4>\n        <h3>{{item.nome}}</h3>\n        <p>{{item.testo}}</p>\n\n        <md-button class=\"md-primary md-raised\" ng-click=\"Delete(item._id, $index)\">Cancella</md-button>\n        <md-button class=\"md-primary md-raised\" ng-click=\"Accetta(item, $index)\">Accetta</md-button>\n      </div>\n    </md-item-content>\n  </md-item>\n</md-list>\n");
$templateCache.put("comment/directives/addComment/tpl.html","\n<md-list>commenti passati\n  <md-item ng-repeat=\"item in commenti\">\n    <md-item-content class=\" md-whiteframe-z1\">\n      <div class=\"md-tile-content\">\n        <h3>{{item.nome}}</h3>\n        <h4>{{item.date| date:\"dd/MM/yyyy \' alle \' H:mm\"}}</h4>\n        <p>{{item.testo}}\n        </p>\n          <p>{{item.rif}}</p>\n      </div>\n    </md-item-content>\n  </md-item>\n</md-list>\n\n<form novalidate layout=\"column\" layout-align=\"center start\">\n  <md-list layout-fill>\n\n    <md-item>\n      <md-item-content class=\" md-whiteframe-z1\">\n        <md-input-container >\n          <label>Nome</label>\n          <input ng-model=\"commento.nome\">\n        </md-input-container>\n      </md-item-content>\n    </md-item>\n\n    <md-item>\n      <md-item-content class=\" md-whiteframe-z1\">\n        <md-input-container >\n          <label>mail</label>\n          <input ng-model=\"commento.mail\">\n        </md-input-container>\n      </md-item-content>\n    </md-item>\n\n    <md-item>\n      <md-item-content class=\" md-whiteframe-z1\">\n        <md-input-container >\n          <label>Nome</label>\n          <input ng-model=\"commento.testo\">\n        </md-input-container>\n      </md-item-content>\n    </md-item>\n\n  </md-list>\n\n\n\n\n\n  <md-button class=\"md-primary md-raised\" ng-click=\"Save()\">Salva</md-button>\n\n</form>\n");
$templateCache.put("contact/backend/list/tpl.html","<md-toolbar class=\"md-theme-indigo\" layout=\"row\" layout-align=\"space-around center\" >\n  <h1 class=\"md-toolbar-tools\">contact</h1>\n\n</md-toolbar>\n\n<md-tabs>\n  <md-tab label=\"nuovi\">\n\n<md-list>\n  <md-item ng-repeat=\"nuovo in nuovi\">\n    <md-item-content class=\" md-whiteframe-z1\">\n      <div class=\"md-tile-content\">\n        <h4>{{nuovo.date| date:\"dd/MM/yyyy \' alle \' H:mm\"}}</h4>\n        <h3>{{nuovo.nome}}</h3>\n        <p>{{nuovo.testo}}</p>\n\n        <md-button class=\"md-primary md-raised\" ng-click=\"Delete(nuovo._id, $index)\">Cancella</md-button>\n        <md-button class=\"md-primary md-raised\" ng-click=\"Accetta(nuovo, $index)\">Archivia</md-button>\n      </div>\n    </md-item-content>\n  </md-item>\n</md-list>\n\n  </md-tab>\n  <md-tab label=\"archiviati\">\n    <md-list>\n      <md-item ng-repeat=\"archiviati in archiviati\">\n        <md-item-content class=\" md-whiteframe-z1\">\n          <div class=\"md-tile-content\">\n            <h4>{{archiviati.date| date:\"dd/MM/yyyy \' alle \' H:mm\"}}</h4>\n            <h3>{{archiviati.nome}}</h3>\n            <p>{{archiviati.testo}}</p>\n\n            <md-button class=\"md-primary md-raised\" ng-click=\"Delete(archiviati._id, $index)\">Cancella</md-button>\n\n          </div>\n        </md-item-content>\n      </md-item>\n    </md-list>\n  </md-tab>\n\n</md-tabs>\n");
$templateCache.put("contact/directives/contact/tpl.html","<form novalidate layout=\"column\" layout-align=\"center start\">\n\n<div class=\"contact-container\" layout-fill>\n        <md-input-container>\n          <label>Nome</label>\n          <input ng-model=\"contact.nome\">\n        </md-input-container>\n\n        <md-input-container>\n          <label>mail</label>\n          <input ng-model=\"contact.mail\">\n        </md-input-container>\n\n        <md-input-container>\n          <label>testo</label>\n          <textarea ng-model=\"contact.testo\"></textarea>\n        </md-input-container>\n      </div>\n\n\n\n  <md-button class=\"md-primary md-raised\" ng-click=\"Save()\">Salva</md-button>\n\n</form>\n");
$templateCache.put("contact/frontend/contact/tpl.html","<contact></contact>\n");
$templateCache.put("image/backend/list/tpl.html","<md-toolbar class=\"md-theme-indigo\" layout=\"row\" layout-align=\"space-around center\" >\n  <h1 class=\"md-toolbar-tools\">image</h1>\n  <md-button class=\"md-primary md-raised\" ng-click=\"new()\">nuovo</md-button>\n\n\n</md-toolbar>\n\n\n<md-list>\n  <md-item ng-repeat=\"item in items\">\n    <md-item-content class=\" md-whiteframe-z1\">\n      <div class=\"md-tile-content\">\n        <h4>{{item.date| date:\"dd/MM/yyyy \' alle \' H:mm\"}}</h4>\n        <h3>{{item.nome}}</h3>\n        <p>{{item.tipo}}</p>\n        <p>{{item.orientation}}</p>\n\n        <md-button class=\"md-primary md-raised\" ng-click=\"Delete(item._id, $index)\">Cancella</md-button>\n      </div>\n    </md-item-content>\n  </md-item>\n</md-list>\n");
$templateCache.put("image/dialogs/addImage/tpl.html","<md-dialog>\n  <md-content layout=\"column\" layout-wrap>\n\n    <md-button ng-file-select ng-model=\"image.files\" class=\"md-primary md-raised\" ng-multiple=\"false\">Scegli file</md-button>\n    {{files}}\n\n    <md-select ng-if=\"tipoDiImmagine === \'\'\" placeholder=\"tipo\" ng-model=\"image.informazioni.tipo\">\n      <md-option ng-repeat=\"t in tipologie\" value=\"{{t}}\">{{t}}</md-option>\n    </md-select>\n\n\n\n\n    <md-button class=\"md-primary md-raised\" ng-click=\"save(image)\">save</md-button>\n    <md-button class=\"md-primary md-raised\" ng-click=\"closeDialog()\">close</md-button>\n\n  </md-content>\n</md-dialog>\n");
$templateCache.put("image/dialogs/expand/tpl.html","<md-dialog>\n\n<img ng-click=\"expand()\" ng-src=\"images/galleria/{{expandedImage}}\">\n</md-dialog>\n");
$templateCache.put("image/directives/galleryitem/tpl.html","<img ng-click=\"expand()\" ng-src=\"images/galleria/{{rif}}\">\n");
$templateCache.put("image/frontend/galleria/tpl.html","<md-grid-list md-cols=\"10\"\n              md-cols-sm=\"6\"\n\n              md-row-height=\"1:1\"\n              md-gutter=\"0px\">\n  <md-grid-tile\n                class=\"tile\"\n                ng-repeat=\"galleryItem in galleriaList\"\n                md-colspan=\"{{galleryItem.larghezza}}\"\n                md-rowspan=\"{{galleryItem.altezza}}\"\n                md-colspan-sm=\"{{galleryItem.larghezzaLPar}}\"\n                md-rowspan-sm=\"{{galleryItem.altezzaLPar}}\"\n                >\n    <div layout-fill style=\"\npadding-left:{{galleryItem.larghezza * multiplier}}px;\npadding-right:{{galleryItem.larghezza * multiplier}}px;\npadding-top:{{galleryItem.altezza * multiplier}}px;\npadding-bottom:{{galleryItem.altezza * multiplier}}px;\n\">\n\n      <div class=\"tile-image-container\" layout-fill>\n      <div class=\" md-whiteframe-z2\">\n        <expand  rif=\"{{galleryItem.nome}}\"></expand>\n      </div>\n      </div>\n    </div>\n</div>\n</md-grid-tile>\n</md-grid-list>\n");
$templateCache.put("post/backend/edit/tpl.html","<form novalidate layout=\"column\" layout-align=\"center start\">\n  <md-list layout-fill>\n\n    <md-list-item>\n      <md-button class=\"md-primary md-raised\" ng-click=\"Save()\">Salva</md-button>\n    </md-list-item>\n\n    <md-list-item layout-padding layout=\"column\" class=\" md-whiteframe-z1\">\n      <md-select placeholder=\"Tipo\" ng-model=\"post.tipo\">\n        <md-option ng-repeat=\"tipo in tipiDiPost\" value=\"{{tipo}}\">{{tipo}}</md-option>\n      </md-select>\n\n      <md-input-container layout-fill>\n        <label>titolo</label>\n        <input ng-model=\"post.titolo\">\n      </md-input-container>\n\n      <md-input-container layout-fill>\n        <label>testo</label>\n        <textarea ng-model=\"post.testo\"></textarea>\n      </md-input-container>\n    </md-list-item>\n\n    <md-list-item layout-padding layout=\"column\" class=\" md-whiteframe-z1\">\n      <md-button class=\"md-primary md-raised\" ng-click=\"tags()\">tags</md-button>\n      <md-list>\n        <md-list-item>\n          <div ng-repeat=\"tag in post.tags\" >{{tag}}</div>\n        </md-list-item>\n      </md-list>\n    </md-list-item>\n\n    <md-list-item layout-padding layout=\"column\" class=\" md-whiteframe-z1\">\n      <md-button class=\"md-primary md-raised\" ng-click=\"header()\">Header</md-button>\n      <p>{{post.header}}</p>\n    </md-list-item>\n\n    <md-list-item layout-padding layout=\"column\" class=\" md-whiteframe-z1\">\n      <md-button class=\"md-primary md-raised\" ng-click=\"copertina()\">copertina</md-button>\n      <p>{{post.copertina}}</p>\n    </md-list-item>\n\n    <md-list-item layout-padding layout=\"column\" class=\" md-whiteframe-z1\">\n      <md-button class=\"md-primary md-raised\" ng-click=\"galleria()\">galleria</md-button>\n      <p>{{post.galleria}}</p>\n      <div ng-repeat=\"galleryItem in post.galleria\">{{galleryItem.nome}}</div>\n    </md-list-item>\n\n\n\n\n  </md-list>\n</form>\n\n\n\n\n\n\n\n<div ng-if=\"showComment\">\n  <md-list>\n    <md-item ng-repeat=\"commento in commenti\">\n      <md-item-content class=\" md-whiteframe-z1\">\n        <div class=\"md-tile-content\">\n          <h4>{{commento.date| date:\"dd/MM/yyyy \' alle \' H:mm\"}}</h4>\n          <h3>{{commento.nome}}</h3>\n          <p>{{commento.testo}}</p>\n\n          <md-button class=\"md-primary md-raised\" ng-click=\"Delete(commento._id, $index)\">Cancella</md-button>\n        </div>\n      </md-item-content>\n    </md-item>\n  </md-list>\n</div>\n");
$templateCache.put("post/backend/list/tpl.html","<md-toolbar>\n  <div class=\"md-toolbar-tools\" layout=\"row\" layout-align=\"space-between center\">\n    <h1>post</h1>\n    <md-button class=\"md-primary md-raised\" ng-click=\"new()\">nuovo</md-button>\n  </div>\n</md-toolbar>\n\n<md-list>\n  <md-item ng-repeat=\"postItem in postList\">\n    <md-item-content class=\" md-whiteframe-z1\">\n      <div class=\"md-tile-content\" layout=\"row\">\n      <div layout=\"column\" layout-padding>\n          <md-button ng-href=\"/#/amministrazione/editpost/{{postItem._id}}\" class=\"md-primary md-raised\">edit</md-button>\n        <md-switch ng-model=\"postItem.attivo\" ng-change=\"setState(postItem)\" aria-label=\"attivo\">\n          Attivo: {{ postItem.attivo }}\n        </md-switch>\n      </div>\n\n        <div layout=\"column\" flex>\n          <h3>{{postItem.titolo}}</h3>\n          <div>{{postItem.tipo}}</div>\n          <h4>{{postItem.date| date:\"dd/MM/yyyy \' alle \' H:mm\"}}</h4>\n        </div>\n        <div layout-padding>\n          <md-button class=\"md-warn md-raised md-fab\" ng-click=\"Delete(postItem._id, $index)\">\n            <div layout=\"row\" layout-align=\"space-around center\" class=\"icon-trashcan\">\n            </div>\n          </md-button>\n        </div>\n      </div>\n    </md-item-content>\n  </md-item>\n</md-list>\n");
$templateCache.put("post/dialogs/new/tpl.html","<md-dialog>\n  <md-content layout=\"column\" layout-wrap>\n\n    <md-select placeholder=\"Tipo\" ng-model=\"post.tipo\">\n      <md-option ng-repeat=\"tipo in tipiDiPost\" value=\"{{tipo}}\">{{tipo}}</md-option>\n    </md-select>\n\n    <md-input-container layout-fill>\n      <label>titolo</label>\n      <input ng-model=\"post.titolo\">\n    </md-input-container>\n\n\n\n\n    <md-button class=\"md-primary md-raised\" ng-click=\"save(post)\">save</md-button>\n    <md-button class=\"md-primary md-raised\" ng-click=\"closeDialog()\">close</md-button>\n\n  </md-content>\n</md-dialog>\n");
$templateCache.put("post/directives/share/tpl.html","<div>condividi</div>\n<div layout=\"row\">\n  <div class=\"social-bottom\">\n    <md-button socialshare\n    socialshare-provider=\"facebook\"\n    socialshare-text=\"720kb is enough!\"\n    class=\"md-fab md-raised social-bottom\"\n    layout=\"row\"\n    layout-align=\"center center\">\n      <div class=\"icon icon-facebook-alt\"></div>\n    </md-button>\n  </div>\n\n\n  <div class=\"social-bottom\">\n    <md-button\n    socialshare\n    socialshare-provider=\"twitter\"\n    socialshare-text=\"720kb is enough!\"\n    class=\"md-fab md-raised social-bottom\"\n    layout=\"row\"\n    layout-align=\"center center\">\n      <div class=\"icon icon-twitter-square\"></div>\n    </md-button>\n  </div>\n\n  <div class=\"social-bottom\">\n    <md-button socialshare\n    socialshare-provider=\"pinterest\"\n    class=\"md-fab md-raised social-bottom\"\n    layout=\"row\"\n    layout-align=\"center center\">\n      <div class=\"icon icon-pinterest\"></div>\n    </md-button>\n  </div>\n</div>\n\n\n<!--\n{link: \'www.facebook.com\', icon: \'facebook-alt\'},\n\n{link: \'www.pinterest.com\', icon: \'pinterest\'},\n\n{link: \'www.instagram.com\', icon: \'instagrem\'},\n\n{link: \'www.twitter.com\', icon: \'twitter-square\'}\n\n\n-->\n");
$templateCache.put("post/frontend/aboutme/tpl.html","<div class=\"article-single\" layout=\"row\">\n  <div class=\"article-single-content\" flex layout=\"column\">\n    <h3>{{post.titolo}}</h3>\n    <div layout=\"row\" layout-warp>\n      <div class=\"article-tag\" tag-botton rif=\"{{tag}}\" ng-repeat=\"tag in post.tags\"></div>\n    </div>\n    <p>{{post.testo}}</p>\n    <p>{{post.date| date:\"dd/MM/yyyy \"}}</p>\n  </div>\n\n\n  <div flex=\"30\" layout=\"column\" layout-align=\"start center\">\n    <img ng-src=\"images/copertina/{{post.copertina.nome}}\" layout-fill>\n  </div>\n</div>\n");
$templateCache.put("post/frontend/articoli/tpl.html","<div class=\"article-list\">\n\n\n  <div ng-repeat=\"articoli in articoliList\" layout=\"column\" class=\"article-list-item \">\n\n\n\n\n  <div layout=\"row\">\n\n    <div  class=\"article-image-container\" flex=\"30\" layout=\"column\" layout-align=\"center center\" >\n      <img ng-src=\"images/copertina/{{articoli.copertina.nome}}\">\n    </div>\n\n    <div flex class=\"article-content\">\n      <div flex layout=\"column\" layout=\"column\" layout-align=\"space-between start\">\n        <h3 layout-fill>{{articoli.titolo}}</h3>\n\n        <div layout=\"row\" layout-wrap layout-align=\"center center\">\n          <div class=\"article-tag\" tag-botton rif=\"{{tag}}\" ng-repeat=\"tag in articoli.tags\"></div>\n        </div>\n        <truncate rif=\"{{articoli.testo}}\"></truncate>\n        <p>{{articoli.date | date:\"MM/dd/yyyy\"}}</p>\n\n        <a ng-href=\"/#/post/{{articoli._id}}\">vai</a>\n      </div>\n    </div>\n  </div>\n\n\n\n\n    <div  class=\"separator-container\" layout=\"row\" layout-align=\"center center\" >\n      <img class=\"separator\" ng-src=\"imgbase/sep4.jpg\">\n    </div>\n\n  </div>\n</div>\n");
$templateCache.put("post/frontend/list/tpl.html","<md-toolbar class=\"md-theme-indigo\" layout=\"row\" layout-align=\"space-around center\" >\n  <h1 class=\"md-toolbar-tools\">post</h1>\n</md-toolbar>\n\n\n<md-list>\n  <md-item ng-repeat=\"post in postList\">\n    <md-item-content class=\" md-whiteframe-z1\">\n      <div class=\"md-tile-content\">\n        <h3>{{post.titolo}}</h3>\n        <a ng-href=\"/#/post/{{post._id}}\">vai</a>\n      </div>\n    </md-item-content>\n  </md-item>\n</md-list>\n");
$templateCache.put("post/frontend/outfit/tpl.html","<div class=\"outfit\">\n\n\n  <div ng-repeat=\"articoli in articoliList\" layout=\"column\">\n    <div class=\"article-list-item\">\n      <h3 layout-fill>{{articoli.titolo}}</h3>\n      <div layout=\"row\" layout-wrap layout-align=\"center center\">\n        <div class=\"article-tag\" tag-botton rif=\"{{tag}}\" ng-repeat=\"tag in articoli.tags\"></div>\n      </div>\n      <page-slider></page-slider>\n      <p layout-fill>{{articoli.testo}}</p>\n    </div>\n\n    <div  class=\"separator-container\" layout=\"row\" layout-align=\"center center\" >\n      <img class=\"separator\" ng-src=\"imgbase/sep4.jpg\">\n    </div>\n\n  </div>\n</div>\n");
$templateCache.put("post/frontend/press/tpl.html","<md-toolbar class=\"md-theme-indigo\" layout=\"row\" layout-align=\"space-around center\" >\n  <h1 class=\"md-toolbar-tools\">press</h1>\n</md-toolbar>\n\n\n<md-list>\n  <md-item ng-repeat=\"press in pressList\">\n    <md-item-content class=\" md-whiteframe-z1\">\n      <div class=\"md-tile-content\">\n        <h3>{{press.titolo}}</h3>\n        <a ng-href=\"/#/press/{{press._id}}\">vai</a>\n      </div>\n    </md-item-content>\n  </md-item>\n</md-list>\n");
$templateCache.put("post/frontend/shooting/tpl.html","\n<div class=\"outfit\">\n\n\n  <div ng-repeat=\"articoli in articoliList\" layout=\"column\">\n    <div class=\"article-list-item md-whiteframe-z2\">\n      <h3 layout-fill>{{articoli.titolo}}</h3>\n      <div layout=\"row\" layout-wrap layout-align=\"center center\">\n        <div class=\"article-tag\" tag-botton rif=\"{{tag}}\" ng-repeat=\"tag in articoli.tags\"></div>\n      </div>\n      <page-slider></page-slider>\n      <p layout-fill>{{articoli.testo}}</p>\n    </div>\n\n    <div  class=\"separator-container\" layout=\"row\" layout-align=\"center center\" >\n      <img class=\"separator\" ng-src=\"imgbase/sep4.jpg\">\n    </div>\n\n  </div>\n</div>\n");
$templateCache.put("post/frontend/single/tpl.html","<div class=\"article-single\" layout=\"row\">\n  <div class=\"article-single-content\" flex layout=\"column\">\n\n    <h3>{{post.titolo}}</h3>\n\n    <div layout=\"row\" layout-warp>\n      <div class=\"article-tag\" tag-botton rif=\"{{tag}}\" ng-repeat=\"tag in post.tags\"></div>\n    </div>\n\n    <div layout=\"column\" layout-align=\"center center\">\n      <img class=\"copertina-display\" ng-src=\"images/copertina/{{post.copertina.nome}}\">\n    </div>\n\n    <p>{{post.testo}}</p>\n\n    <p>{{post.date| date:\"dd/MM/yyyy \"}}</p>\n\n  <share></share>\n  </div>\n\n\n</div>\n\n\n\n<md-grid-list md-cols=\"7\"\n              md-cols-sm=\"6\"\n\n              md-row-height=\"1:1\"\n              md-gutter=\"0px\">\n  <md-grid-tile\n                class=\"tile\"\n                ng-repeat=\"galleryItem in post.galleria\"\n                md-colspan=\"{{galleryItem.larghezza}}\"\n                md-rowspan=\"{{galleryItem.altezza}}\"\n                md-colspan-sm=\"{{galleryItem.larghezzaLPar}}\"\n                md-rowspan-sm=\"{{galleryItem.altezzaLPar}}\"\n                >\n    <div layout-fill style=\"\npadding-left:{{galleryItem.larghezza * multiplier}}px;\npadding-right:{{galleryItem.larghezza * multiplier}}px;\npadding-top:{{galleryItem.altezza * multiplier}}px;\npadding-bottom:{{galleryItem.altezza * multiplier}}px;\n\">\n\n      <div class=\"tile-image-container\" layout-fill>\n        <img class=\"tile-image md-whiteframe-z2\" ng-src=\"images/galleria/{{galleryItem.nome}}\">\n      </div>\n    </div>\n</div>\n</md-grid-tile>\n</md-grid-list>\n\n<comment class=\"article-single\" rif=\"{{post._id}}\"></comment>\n");
$templateCache.put("slider/backend/edit/tpl.html","<form novalidate layout=\"column\" layout-align=\"center start\">\n  <md-list layout-fill>\n\n    <md-item>\n\n      <md-item-content layout-padding layout=\"column\" class=\" md-whiteframe-z1\">\n        <md-input-container layout-fill>\n          <label>stato</label>\n          <input ng-model=\"slider.stato\">\n        </md-input-container>\n\n    </md-item>\n\n\n    <md-item layout-padding layout=\"column\" class=\" md-whiteframe-z1\">\n      <md-button class=\"md-primary md-raised\" ng-click=\"header()\">Header</md-button>\n      <div ng-repeat=\"img in slider.immagini\">\n        <p>{{img}}</p>\n        <md-button class=\"md-primary md-raised\" ng-click=\"Splice($index)\">x</md-button>\n      </div>\n    </md-item>\n\n\n    <md-button class=\"md-primary md-raised\" ng-click=\"Save()\">Salva</md-button>\n  </md-list>\n</form>\n");
$templateCache.put("slider/backend/list/tpl.html","<md-toolbar class=\"md-theme-indigo\" layout=\"row\" layout-align=\"space-around center\" >\n  <h1 class=\"md-toolbar-tools\">slider</h1>\n<md-button class=\" md-primary md-raised\" ui-sref=\"nuovoslider\">nuovo</md-button>\n</md-toolbar>\n\n\n<md-list>\n  <md-item ng-repeat=\"item in items\">\n    <md-item-content class=\" md-whiteframe-z1\">\n      <div class=\"md-tile-content\">\n        <h3>{{item.stato}}</h3>\n    \n        <md-button class=\"md-primary md-raised\" ng-click=\"Delete(item._id, $index)\">Cancella</md-button>\n        <md-button ng-href=\"/#/amministrazione/editslider/{{item._id}}\" class=\"md-primary md-raised\">edit</md-button>\n      </div>\n    </md-item-content>\n  </md-item>\n</md-list>\n");
$templateCache.put("slider/directives/pageslider/tpl.html","<div layout=\"column\">\n  <div class=\"{{articoli._id}}\">\n    <div class=\"page-slide\" ng-repeat=\"im in articoli.galleria\">\n  <!--    <img ng-src=\"images/galleria/{{im.nome}}\">  -->\n  <expand rif=\"{{im.nome}}\"></expand>\n\n    </div>\n  </div>\n  <div layout=\"row\" layout-align=\"center center\">\n    <md-button class=\"md-accent md-raised md-fab\" ng-click=\"indietro()\"><div layout=\"row\" layout-align=\"space-around center\" class=\"icon-triangle-left\"></div></md-button>\n    <md-button class=\"md-accent md-raised md-fab\" ng-click=\"avanti()\"><div layout=\"row\" layout-align=\"space-around center\" class=\"icon-triangle-right\"></div></md-button>\n  </div>\n</div>\n");
$templateCache.put("slider/directives/slider/tpl.html","\n  <div class=\"topslider md-whiteframe-z2\" style=\"margin-bottom:0px;\">\n    <div class=\"topslide\">\n    </div>\n  </div>\n");
$templateCache.put("rubrica/backend/list/tpl.html","<md-toolbar class=\"md-theme-indigo\" layout=\"row\" layout-align=\"space-around center\">\n  <h1 class=\"md-toolbar-tools\">rubrica</h1>\n\n</md-toolbar>\n\n<md-tabs>\n  <md-tab label=\"nuovi\">\n\n    <md-list>\n      <md-item ng-repeat=\"nuovo in nuovi\">\n        <md-item-content class=\" md-whiteframe-z1\">\n          <div class=\"md-tile-content\">\n            <h4>{{nuovo.date| date:\"dd/MM/yyyy \' alle \' H:mm\"}}</h4>\n            <h3>{{nuovo.nome}}</h3>\n            <p>{{nuovo.testo}}</p>\n\n            <md-button class=\"md-primary md-raised\" ng-click=\"Delete(nuovo._id, $index)\">Cancella</md-button>\n            <md-button class=\"md-primary md-raised\" ng-click=\"Accetta(nuovo, $index)\">Accetta</md-button>\n          </div>\n        </md-item-content>\n      </md-item>\n    </md-list>\n\n  </md-tab>\n\n  <md-tab label=\"archiviati\">\n    <md-list>\n      <md-item ng-repeat=\"archiviato in archiviati\">\n        <md-item-content class=\" md-whiteframe-z1\">\n          <div class=\"md-tile-content\">\n            <h4>{{archiviato.date| date:\"dd/MM/yyyy \' alle \' H:mm\"}}</h4>\n            <h3>{{archiviato.nome}}</h3>\n            <p>{{archiviato.testo}}</p>\n            <p>{{archiviato.risposta}}</p>\n\n            <md-button class=\"md-primary md-raised\" ng-click=\"Delete(archiviato._id, $index)\">Cancella</md-button>\n            <md-button class=\"md-primary md-raised\" ng-click=\"Rispondi(archiviato.risposta, archiviato, $index)\">rispondi</md-button>\n          </div>\n        </md-item-content>\n      </md-item>\n    </md-list>\n  </md-tab>\n\n</md-tabs>\n");
$templateCache.put("rubrica/dialogs/risposta/tpl.html","<md-dialog>\n  <md-content layout=\"column\" layout-wrap>\n\n    <md-input-container layout-fill>\n      <label>Risposta</label>\n      <textarea ng-model=\"risposta\"></textarea>\n    </md-input-container>\n    <md-button class=\"md-primary md-raised\" ng-click=\"save()\">salva</md-button>\n  </md-content>\n</md-dialog>\n");
$templateCache.put("rubrica/directives/rubrica/tpl.html","<form novalidate layout=\"column\" layout-align=\"center start\">\n\n\n  <div class=\"rubrica-container\" layout-fill>\n          <md-input-container>\n            <label>Nome</label>\n            <input ng-model=\"rubrica.nome\">\n          </md-input-container>\n\n          <md-input-container>\n            <label>mail</label>\n            <input ng-model=\"rubrica.mail\">\n          </md-input-container>\n\n          <md-input-container>\n            <label>testo</label>\n            <textarea ng-model=\"rubrica.testo\"></textarea>\n          </md-input-container>\n        </div>\n\n\n\n\n\n  <md-button class=\"md-primary md-raised\" ng-click=\"Save()\">Salva</md-button>\n\n</form>\n");
$templateCache.put("rubrica/frontend/rubrica/tpl.html","<div class=\"rubrica-page\">\n<rubrica></rubrica>\n<div ng-repeat=\"rubricaItem in rubricaList\" layout=\"column\" layout-fill class=\"rubrica-item \">\n\n  <div  class=\"separator-container\" layout=\"row\" layout-align=\"center center\" >\n    <img class=\"separator\" ng-src=\"imgbase/sep2.jpg\">\n  </div>\n\n  <div  class=\"domanda md-whiteframe-z2\">\n    <h3>{{rubricaItem.nome}}</h3>\n    <p>{{rubricaItem.testo}}</p>\n  </div>\n\n  <div class=\"risposta md-whiteframe-z2\">\n    <h3>Jessica</h3>\n    <p>{{rubricaItem.risposta}}</p>\n\n    </div>\n</div>\n\n</div>\n");
$templateCache.put("sponsor/backend/edit/tpl.html","<form novalidate layout=\"column\" layout-align=\"center start\">\n  <md-list layout-fill>\n\n    <md-list-item>\n      <md-button class=\"md-primary md-raised\" ng-click=\"Save()\">Salva</md-button>\n    </md-list-item>\n\n      <md-input-container layout-fill>\n        <label>titolo</label>\n        <input ng-model=\"sponsor.titolo\">\n      </md-input-container>\n\n\n      <md-input-container layout-fill>\n        <label>link</label>\n        <input ng-model=\"sponsor.link\">\n      </md-input-container>\n\n\n\n    <md-list-item layout-padding layout=\"column\" class=\" md-whiteframe-z1\">\n      <md-button class=\"md-primary md-raised\" ng-click=\"copertina()\">copertina</md-button>\n      <p>{{sponsor.copertina}}</p>\n    </md-list-item>\n\n\n\n\n\n\n  </md-list>\n</form>\n");
$templateCache.put("sponsor/backend/list/tpl.html","<md-toolbar>\n  <div class=\"md-toolbar-tools\" layout=\"row\" layout-align=\"space-between center\">\n    <h1>sponsor</h1>\n    <md-button class=\"md-primary md-raised\" ng-click=\"new()\">nuovo</md-button>\n  </div>\n</md-toolbar>\n\n<md-list>\n  <md-item ng-repeat=\"sponsorItem in sponsorList\">\n    <md-item-content class=\" md-whiteframe-z1\">\n      <div class=\"md-tile-content\" layout=\"row\">\n      <div layout=\"column\" layout-padding>\n          <md-button ng-href=\"/#/amministrazione/editsponsor/{{sponsorItem._id}}\" class=\"md-primary md-raised\">edit</md-button>\n        <md-switch ng-model=\"sponsorItem.attivo\" ng-change=\"setState(sponsorItem)\" aria-label=\"attivo\">\n          Attivo: {{ sponsorItem.attivo }}\n        </md-switch>\n      </div>\n\n        <div layout=\"column\" flex>\n          <h3>{{sponsorItem.titolo}}</h3>\n          <div>{{sponsorItem.tipo}}</div>\n          <h4>{{sponsorItem.date| date:\"dd/MM/yyyy \' alle \' H:mm\"}}</h4>\n        </div>\n        <div layout-padding>\n          <md-button class=\"md-warn md-raised md-fab\" ng-click=\"Delete(sponsorItem._id, $index)\">\n            <div layout=\"row\" layout-align=\"space-around center\" class=\"icon-trashcan\">\n            </div>\n          </md-button>\n        </div>\n      </div>\n    </md-item-content>\n  </md-item>\n</md-list>\n");
$templateCache.put("sponsor/dialogs/new/tpl.html","<md-dialog>\n  <md-content layout=\"column\" layout-wrap>\n\n    <md-select placeholder=\"Tipo\" ng-model=\"sponsor.tipo\">\n      <md-option ng-repeat=\"tipo in tipiDiPost\" value=\"{{tipo}}\">{{tipo}}</md-option>\n    </md-select>\n\n    <md-input-container layout-fill>\n      <label>titolo</label>\n      <input ng-model=\"sponsor.titolo\">\n    </md-input-container>\n\n\n\n\n    <md-button class=\"md-primary md-raised\" ng-click=\"save(sponsor)\">save</md-button>\n    <md-button class=\"md-primary md-raised\" ng-click=\"closeDialog()\">close</md-button>\n\n  </md-content>\n</md-dialog>\n");
$templateCache.put("sponsor/directives/sponsor/tpl.html","<div class=\"sponsordisplay\" layout=\"column\" layout-align=\"center center\">\n\n  <div ng-repeat=\"singlesponsor in sponsorList\">\n    <h3>{{singlesponsor.titolo}}</h3>\n    <a ng-href=\"{{singlesponsor.link}}\" target=\"_blank\">\n    <img class=\"md-whiteframe-z2\" ng-src=\"images/copertina/{{singlesponsor.copertina.nome}}\">\n  </a>\n  </div>\n\n</div>\n");
$templateCache.put("tags/backend/edit/tpl.html","<form novalidate layout=\"column\" layout-align=\"center start\">\n  <md-list layout-fill>\n\n    <md-item>\n\n      <md-item-content layout-padding layout=\"column\" class=\" md-whiteframe-z1\">\n        <md-input-container layout-fill>\n          <label>titolo</label>\n          <input ng-model=\"tags.titolo\">\n        </md-input-container>\n\n    </md-item>\n\n    <md-button class=\"md-primary md-raised\" ng-click=\"Save()\">Salva</md-button>\n  </md-list>\n</form>\n<md-button class=\"md-primary md-raised\" ng-click=\"comment()\">comment</md-button>\n<div ng-if=\"showComment\">\n  <md-list>\n    <md-item ng-repeat=\"commento in commenti\">\n      <md-item-content class=\" md-whiteframe-z1\">\n        <div class=\"md-tile-content\">\n          <h4>{{commento.date| date:\"dd/MM/yyyy \' alle \' H:mm\"}}</h4>\n          <h3>{{commento.nome}}</h3>\n          <p>{{commento.testo}}</p>\n\n          <md-button class=\"md-primary md-raised\" ng-click=\"Delete(commento._id, $index)\">Cancella</md-button>\n        </div>\n      </md-item-content>\n    </md-item>\n  </md-list>\n</div>\n");
$templateCache.put("tags/backend/list/tpl.html","<md-toolbar class=\"md-theme-indigo\" layout=\"row\" layout-align=\"space-around center\" >\n  <h1 class=\"md-toolbar-tools\">tags</h1>\n<md-button class=\" md-primary md-raised\" ui-sref=\"nuovotags\">nuovo</md-button>\n</md-toolbar>\n\n\n<md-list>\n  <md-item ng-repeat=\"item in items\">\n    <md-item-content class=\" md-whiteframe-z1\">\n      <div class=\"md-tile-content\">\n        <h3>{{item.titolo}}</h3>\n        <h4>{{item.date| date:\"dd/MM/yyyy \' alle \' H:mm\"}}</h4>\n\n        <md-button class=\"md-primary md-raised\" ng-click=\"Delete(item._id, $index)\">Cancella</md-button>\n        <md-button ng-href=\"/#/amministrazione/edittags/{{item._id}}\" class=\"md-primary md-raised\">edit</md-button>\n      </div>\n    </md-item-content>\n  </md-item>\n</md-list>\n");
$templateCache.put("tags/dialogs/admin/tpl.html","<md-dialog style=\"height: 600px;\">\n    <md-content layout=\"row\">\n\n    <div flex>\n      <md-list ng-repeat=\"a in answer\">\n        <div>\n          <md-button class=\"md-raised\" ng-click=\"deleteTagFromAnswer($index)\">x</md-button>\n          {{a}}\n        </div>\n      </md-list>\n      <md-button class=\"md-primary md-raised\" ng-click=\"save()\">salva</md-button>\n    </div>\n\n\n    <div flex>\n      <md-input-container style=\"height: 150px;padding: 24px;\">\n        <label>tag</label>\n        <input ng-model=\"newTag.nome\">\n      </md-input-container>\n\n      <md-button class=\"md-primary md-raised\" ng-click=\"addTag()\">aggiungi tag</md-button>\n\n      <md-list ng-repeat=\"tag in tags\">\n        <div style=\"height: 100px;\">\n          <md-button class=\"md-raised\" ng-click=\"Delete(tag._id, $index)\">x</md-button>\n          <md-button flex class=\"md-raised\" ng-click=\"addTagToAnswer(tag.nome)\">{{tag.nome}}</md-button>\n        </div>\n      </md-list>\n    </div>\n\n  </md-content>\n</md-dialog>\n\n\n\n\n\n\n\n\n\n\n</md-list>\n");
$templateCache.put("tags/directives/tags/tpl.html","<h2  layout=\"row\" layout-align=\"center center\">Tags</h2>\n\n<div layout=\"row\" layout-wrap layout-margin layout-padding layout-align=\"center center\">\n\n<div tag-botton rif=\"{{singleTag.nome}}\" ng-repeat=\"singleTag in tagsList\" class=\"botton-tag-container\">\n\n\n  </div>\n\n</div>\n");
$templateCache.put("tags/frontend/taglist/tpl.html","<div layout-padding>\n  <md-grid-list md-cols=\"7\" md-row-height=\"1:1\" md-gutter=\"0px\">\n    <md-grid-tile class=\"tile\" ng-repeat=\"post in tagList\" md-colspan=\"{{post.larghezza}}\" md-rowspan=\"{{post.altezza}}\">\n      <div layout-fill style=\"\npadding-left:{{post.larghezza * multiplier}}px;\npadding-right:{{post.larghezza * multiplier}}px;\npadding-top:{{post.altezza * multiplier}}px;\npadding-bottom:{{post.altezza * multiplier}}px;\n\">\n\n        <a class=\"tile-image-container\" ng-href=\"/#/post/{{post._id}}\" layout-fill>\n          <img class=\"tile-image md-whiteframe-z2\" ng-src=\"images/copertina/{{post.copertina.nome}}\">\n          <div class=\"tile-footer-per\">\n            <h3>{{post.titolo}}</h3>\n            <div layout=\"row\" layout-align=\"space-between center\">\n              <p>{{post.tipo}}</p>\n              <p>{{post.date| date:\"dd/MM/yyyy \"}}</p>\n            </div>\n          </div>\n        </a>\n      </div>\n</div>\n</md-grid-tile>\n</md-grid-list>\n\n</div>\n");}]);