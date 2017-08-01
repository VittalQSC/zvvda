import { translationManager, configs, constants } from './../../utils/';

let RoundsComponentController = function ($translate, $http) {
  this.handleRoundClick = function (event, id) {
    event.preventDefault();
    this.currItems = [];
    this.rounds = this.rounds.map(round => {
      round.id === id && (this.currItems = !round.active ? round.items : []);
      return {
        ...round, 
        active: round.id === id ? !round.active : false
      }
    });
  }
  
  this.currItems = [];

  this.rounds = [
    {
      id: 1,
      name: "Round 1",
      active: false,
      items: [
        // {
        //   white: "nullw",
        //   result: "nullr",
        //   black: "nullb",
        // },
      ]
    },
    {
      id: 2,
      name: "Round 2",
      active: false,
      items: []
    },
    {
      id: 3,
      name: "Round 3",
      active: false,
      items: [
        // {
        //   white: "nullw31",
        //   result: "nullr31",
        //   black: "nullb31",
        // },
        // {
        //   white: "nullw32",
        //   result: "nullr32",
        //   black: "nullb32",
        // },        
      ]
    },
    {
      id: 4,
      name: "Round 4",
      active: false,
      items: []
    },
    {
      id: 5,
      name: "Round 5",
      active: false,
      items: []
    },
    {
      id: 6,
      name: "Round 6",
      active: false,
      items: []
    },
    {
      id: 7,
      name: "Round 7",
      active: false,
      items: []
    },
    {
      id: 8,
      name: "Round 8",
      active: false,
      items: []
    },
    {
      id: 9,
      name: "Round 9",
      active: false,
      items: []
    },
  ];
}

RoundsComponentController.$inject = ['$translate', '$http']

export default RoundsComponentController;