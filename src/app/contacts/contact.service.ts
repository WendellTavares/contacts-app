import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Contact } from "./contact";

@Injectable({
    providedIn: 'root'
})
export class ContactService {

    //private apiUrl: string = 'http://localhost:8080/contacts';
    private apiUrl: string = 'https://api-contacts-wts.herokuapp.com/contacts';

    constructor(private httpClient: HttpClient){}

    listAll(): Observable<Contact[]>{
        return this.httpClient.get<Contact[]>(`${this.apiUrl}`);
    }

    listAllStatusIs(status: boolean): Observable<Contact[]>{
        return this.httpClient.get<Contact[]>(`${this.apiUrl}/status/${status}`);
    }

    /*
    listMock(): Contact[]{
        return CONTACTS;
    }
    */

}

/*
var CONTACTS: Contact[] = [
    {
        id: 1,
        imagemUrl:'/assets/images/eu.jpeg',
        nome: 'Wendell Tavares de Souza',
        ramalInterno: '30001',
        ramalExterno: '1134440675',
        email: 'wendell@email.com',
        corporativo: '1199999999',
        setor: 'TI'
    },
    {
        id: 2,
        imagemUrl:'/assets/images/eu.jpeg',
        nome: 'Gabriela Martinez Moura',
        ramalInterno: '30001',
        ramalExterno: '1134440675',
        email: 'gabriela@email.com',
        corporativo: '11999999999',
        setor: 'TI'
    },
    {
        id: 3,
        imagemUrl:'/assets/images/eu.jpeg',
        nome: 'Wendell Tavares de Souza',
        ramalInterno: '30001',
        ramalExterno: '1134440675',
        email: 'wendell@email.com',
        corporativo: '11999999999',
        setor: 'TI'
    },
    {
        id: 4,
        imagemUrl:'/assets/images/eu.jpeg',
        nome: 'Wendell Tavares de Souza',
        ramalInterno: '30001',
        ramalExterno: '1134440675',
        email: 'wendell@email.com',
        corporativo: '11999999999',
        setor: 'TI'
    },
    {
        id: 5,
        imagemUrl:'/assets/images/eu.jpeg',
        nome: 'Wendell Tavares de Souza',
        ramalInterno: '30001',
        ramalExterno: '1134440675',
        email: 'wendell@email.com',
        corporativo: '000000',
        setor: 'TI'
    },
  ]
  */