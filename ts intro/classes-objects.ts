export class car implements GpsListener {

    spd: number
    bnd: string

    incSpd(){
        this.spd++
    }
    dscSpd(){
        this.spd--
    }
    prchDt(){
        return new Date()
    }
    location(): void{

    }
}
let cr:car= new car()
cr.incSpd()