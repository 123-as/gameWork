class animal{
    constructor(blood,attack,shield=0,name){
        this.blood=blood;
        this.attack=attack;
        this.shield=shield
        this.name=name;
    }
    //剩餘血量護頓
    remain(hurt){
        if(this.shield>0){
            this.shield-=hurt;
            if(this.shield<0){
                this.blood+=this.shield;
                this.shield=0;
            }
        }
        else if(this.shield<=0){
            this.blood=this.blood-hurt;
            if(this.blood<0){
                this.blood=0;
            }
        }

        console.log(`${this.name}所剩血量${this.blood},護頓${this.shield}`);
        if(this.blood===0){
            this.die();
        }
    }
    die(){
        console.log(`${this.name}戰死`)
    }
}
class Enemy  extends animal{
    constructor(blood,attack,shield,name){
        super(blood,attack,shield,name);
    }
    hurt(){
        console.log("敵方襲擊猛烈");
    }
}
class  One  extends  animal{
    constructor(blood,attack,shield,name){
        super(blood,attack,shield,name);
    }
    hurt(){
        console.log("對敵方進行攻擊");
    }
}
class  Two  extends  animal{
    constructor(blood,attack,shield,name){
        super(blood,attack,shield,name);
    }
    hurt(){
        console.log("對敵方進行攻擊");
    }
}
class  Three extends  animal{
    constructor(blood,attack,shield,name){
        super(blood,attack,shield,name);
    }
    hurt(){
        console.log("對敵方進行攻擊");
    }
}

class Game{
    constructor(){
        this.me=[new One(40,15,0,"哥布林"),new Two(80,15,35,"火精靈"),new Three(50,20,15,"惡狼犬")];
        this.enemy=new Enemy(220,30,0,"敵方");
        this.live=true;
        this.init();
    }
    team(){
            this.me.sort((a,b)=>Math.random()-0.5);
            console.log(this.me);
    }
    init(){
        console.log("戰鬥開始");
        this.team();
        for(let i=0;(this.live)&&i<this.me.length;i++){
            console.log(`${this.me[i].name}上場`);
            while(true){
                this.me[i].hurt();
                this.enemy.remain(this.me[i].attack);
                if(this.enemy.blood<=0){
                    console.log('戰鬥勝利');
                    this.live=false;
                    break;
                }
                this.enemy.hurt();
                this.me[i].remain(this.enemy.attack);
                if(this.me[i].blood<=0){
                    break;
                }
            }
        }
        this.live&&console.log("戰鬥失敗")
    }
}
new Game();
