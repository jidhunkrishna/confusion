import { Injectable } from '@angular/core';

import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { resolve } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

    getLeaders(): Promise<Leader[]> {
      return new Promise(resolve => {
        // Simulate server latency with 2 second delay
          setTimeout(() => resolve(LEADERS), 2000);
      });
  }

    getLeader(id: number):  Promise<Leader> {
    return  Promise.resolve(LEADERS.filter((leader) => (leader.id === id))[0]);
  }


    getFeaturedLeader():  Promise<Leader> {
    return  Promise.resolve(LEADERS.filter((leader) => leader.featured)[0]);
  }


}
