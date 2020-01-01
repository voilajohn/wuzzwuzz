class SceneStart extends Phaser.Scene {
    constructor(){
        super('SceneStart');
    }
    preload(){
        this.load.image('sky', 'images/splash/splash-screen.png');//from wuzz game
    }
    create(){
        console.log("Wuzz wuzz welcome");
        let bg = this.add.image(0,0,"sky").setOrigin(0,0);

        Align.scaleToGameW(bg,1);

        this.aGrid = new AlignGrid({
            scene: this,
            rows: 11,
            cols: 11
        });
        //this.aGrid.showNumbers();
        var HomeScreen = this.add.graphics();
        var HomeScreen = this.add.graphics();
        HomeScreen.fillStyle(0x222222, 0.8);
        HomeScreen.fillRect(860, 370, 320, 50);

        var width = this.cameras.main.width;
        var height = this.cameras.main.height;
        var loadingText = this.make.text({
            x: width / 2,
            y: height - 50,
            text: 'Character design and story by Cameron and Finley Flottmeyer.',
            padding: {
                left: 120,
                right: 120,
                top: 20,
                bottom: 20
            },
            style: {
                fontSize: '14px',
                fontFamily: 'Arial',
                fill: '#FFFFFF',
                backgroundColor: '#000000',
                border: '1px solid #000'
            },
            wordWrap: {
                width: width,
                callback: null,
                callbackScope: null,
                useAdvancedWrap: false
            }
        });
        loadingText.setOrigin(0.5, 0.5);

        var playAgainText = this.make.text({
            x: width / 2,
            y: height / 2 + 150,
            padding: {
                left: 20,
                right: 20,
                top: 20,
                bottom: 20
            },
            text: "Start Game",
            style: {
                fontSize: '20px',
                fontFamily: 'Arial',
                color: '#ffffff',
                align: 'center', 
                backgroundColor: '#6686d8'
                //fontSize:game.config.width/10,
            }
        });
        playAgainText.setOrigin(0.5,0.5);
        //this.aGrid.placeAtIndex(82,playAgainText);

        playAgainText.setInteractive();
        playAgainText.on("pointerdown",this.playAgain,this);
    }
    playAgain()
    {
        this.scene.start("SceneIntro");
    }
    
    update(){

    }
}