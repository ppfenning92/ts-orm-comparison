import {Column, Entity, Generated, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'typeorm_human'})
export class Human {

    @Column()
    @PrimaryGeneratedColumn("rowid")
    public id: string;

    @Column()
    @Generated("uuid")
    public uuid: string;
    @Column({
        type: "varchar",
        length: 200
    })
    public name: string;
    @Column({
        type: "text",
    })
    public quote: string;
    @Column({
        type: "enum",
        enum: ['green', 'blue', 'red', 'black', 'hotpink'],
    })
    public color: string;
    @Column({
        type: "varchar",
        length: 15
    })
    public ip: string
    @Column({
        type: "integer"
    })
    public age: number;

    @Column({
        type: "date"
    })
    public dob: Date;
}