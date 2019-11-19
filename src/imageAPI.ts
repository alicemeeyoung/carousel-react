// export const imageAPI: any = {
// 	0: {
// 		id: 0,
// 		src: '/john_things_hired.png'
// 	},
// 	1: {
// 		id: 1,
// 		src: '/john_things_hiring.png'
// 	}
// };

export type API = {
  id: number,
  src: string
}

export const imageAPI: API[] = [
  {
    id: 0,
    src: '/john_things_hired.png'
  },
  {
    id: 1,
    src: '/john_things_hiring.png'
  },
  {
    id: 2,
    src: '/john_things_hired.png'
  }
];

