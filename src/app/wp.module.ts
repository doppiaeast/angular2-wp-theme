import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import 'rxjs/add/operator/toPromise';
import { Http } from '@angular/http';
import { WpApiModule, WpApiLoader, WpApiStaticLoader } from 'wp-api-angular'

let config = {
  "baseUrl": "http://localhost:81/wp-json", // your wp instance here
  "api": {
    "wpApiPosts": {
      "getList": [{
        "search": "_embed=true&per_page=1"
      }],
      "get": [2016],
      "getMetaList": [2016],
      "getMeta": [2016, 46575],
      "getRevisionList": [2016],
      "getRevision": [2016, 2026],
      "getCategoryList": [2016],
      "getCategory": [2016, 86],
      "getTagList": [2016],
      "getTag": [2016, 87]
    },
    "wpApiCustom": {
      "movie": {
        "getList": [{
          "search": "_embed=true&per_page=1"
        }],
        "get": [2595]
      }
    },
    "wpApiPages": {
      "getList": [{
        "search": "_embed=true&per_page=1"
      }],
      "get": [535],
      "getMetaList": [535],
      "getMeta": [535, 1],
      "getRevisionList": [535],
      "getRevision": [535, 2035]
    },
    "wpApiMedia": {
      "getList": [{
        "search": "_embed=true&per_page=1"
      }],
      "get": [2499]
    },
    "wpApiTypes": {
      "getList": [{
        "search": "_embed=true&per_page=1"
      }],
      "get": ["attachment"]
    },
    "wpApiStatuses": {
      "getList": [],
      "get": ["publish"]
    },
    "wpApiTaxonomies": {
      "getList": [],
      "get": ["category"]
    },
    "wpApiTerms": [{
      "getList": ["tags"],
      "get": ["tags", 11]
    }, {
      "getList": ["categories"],
      "get": ["categories", 2]
    }],
    "wpApiUsers": {
      "getList": [],
      "get": [1],
      "me": []
    },
    "wpApiComments": {
      "getList": [],
      "get": [686]
    }
  }
};

console.info('config', config);

export function WpApiLoaderFactory(http: Http) {
  return new WpApiStaticLoader(http, config.baseUrl);
}

@NgModule({
  imports: [
    BrowserModule,
    WpApiModule.forRoot({
      provide: WpApiLoader,
      useFactory: (WpApiLoaderFactory),
      deps: [Http]
    })
  ],
})


export class WpModule { }
