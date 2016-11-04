import Dexie from 'dexie';

export class TransactionAppDB extends Dexie {

    transactions: Dexie.Table<ITransaction,number>;

    constructor() {
        //nombre de la base de datos
        super("MoneyMapAppDB");
        //version de la base de datos, se registran los modelos que va a tener la version
        this.version(1).stores({
            transactions: '++id,amount,lat,lng,title,imageUrl'
        });

        //mapea la transaccion que viene con la clase para que sepa cual es
        this.transactions.mapToClass(Transaction);
    }
}

export interface ICategory {

}

export interface ITransaction {
    id?: number;
    amount: number;
    lat: number;
    lng: number;
    title: string;
    imageUrl: string;
}

//clase para el modelo
export class Transaction implements ITransaction {

    id?: number;
    amount: number;
    lat: number;
    lng: number;
    title: string;
    imageUrl: string;

    constructor(amount: number, title: string, lat?: number, lng?: number, id?: number, imageUrl?: string) {
        this.amount = amount;
        this.title = title;

        if (id) this.id = id;
        if (lat) this.lat = lat;
        if (lng) this.lng = lng;
        if (imageUrl) this.imageUrl = imageUrl;
    }

    //agregar un nuevo elemento a transaccion
    save(){
        return db.transactions.add(this);
    }

    static all(){
        //retorna todas las transacciones
        //el objeto de retorno es tipo Promise
        return db.transactions.orderBy("id").reverse().toArray();
    }
}

export let db = new TransactionAppDB();