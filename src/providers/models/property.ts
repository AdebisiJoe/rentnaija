export interface property{
    id:number;
    name:string;
    address:string;
    description:string;
    price:number;
    city?:string;
    state?:string;
    beds:number;
    toilets:number;
    baths:number;
    coverphoto:string;
    type:string;
    //propertyId:string;
    created_at?:string;
    viewid:string;
    sagentid?:string;
    ownerid:number;
}

//         address: "sdsds"
// city: "lasu"
// coverphoto: "http://rentnaija.kavitdigital.com/public/storage/coverimage/Koala_1548811426."
// created_at: "2019-01-30 01:23:46"
// description: "dsdsdsd"
// id: 2
// name: "dsfds"
// ownerid: 1
// price: "500"
// sagentid: "1"
// state: ""
// type: "Hostel"
// updated_at: "2019-01-30 01:23:46"
// viewid: "HQVL6"