import { Injectable } from '@nestjs/common';
import { Pagination } from './types/pagination';

interface Cat{
  name:string;
  origin:string;
  body:string;
}

const cats : Cat[] = [
  {
    name:'Aegean',
    origin:'Greece',
    body:'Moderate'
  },
  {
    name:'Egyptian Mau',
    origin:'Egypt',
    body:'Moderate and muscular'
  },
  {
    name:'Korat',
    origin:'Thailand',
    body:'Natural'
  },
  {
    name:'Siberian',
    origin:'Russia, Ukraine',
    body:'Semi-cobby'
  }
]

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getCats(pagination:Pagination){
    return pagination;
  }
}
