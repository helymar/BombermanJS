const config = {
    width: 900,
    height: 500,
    backgroundColor: "#998",
    parent: "container",
    type: Phaser.AUTO,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 500
            }
        }
    }
}

var game = new Phaser.Game(config);

function preload() {
    this.load.image("cat", "../img/Personajes/cat/Run (1).png");
}
function create() {
    this.fondo = this.add.image(320, 180, "fondo");
    this.cat = this.physics.add.image(80, 100, "cat");
    //this.cat.flipX = false;
    this.cat.setScale(0.2);
    //this.cat.setBounce(0.3)
    this.cat.setCollideWordBounds(true);
    this.input.keyboard.on("keydown_RIGHT", () => {
       this.cat.x++; 
    });
}
function update(time, delta) {
    // console.log(delta);
}