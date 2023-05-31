import {BaseEntity, Column, Entity, Generated, PrimaryGeneratedColumn} from "typeorm";
import "reflect-metadata"
const COLORS = ['green', 'blue', 'red', 'black', 'hotpink'] as const

@Entity({name: 'typeorm_human'})
export class HumanEntity extends BaseEntity {

    @Column()
    @PrimaryGeneratedColumn("rowid")
    public id: number;

    @Column()
    @Generated("uuid")
    public uuid: string;

    @Column({type: "varchar", length: 200})
    public name: string;

    @Column({type: "text",})
    public quote: string;

    @Column({type: "enum", enum: COLORS})
    public color: typeof COLORS[number];

    @Column({type: "varchar", length: 15})
    public ip: string

    @Column({type: "integer"})
    public age: number;

    @Column({type: "date"})
    public dob: Date;
}