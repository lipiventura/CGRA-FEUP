/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
    constructor(scene) {
        super(scene);

        this.greenDiamond = new MyDiamond(this.scene);
        this.redTriangle = new MyTriangleSmall(this.scene, "red");
        this.purpleTriangle = new MyTriangleSmall(this.scene, "purple");
        this.orangeTriangle = new MyTriangleBig(this.scene, "orange");
        this.pinkTriangle = new MyTriangle(this.scene);
        this.blueTriangle = new MyTriangleBig(this.scene, "blue");
        this.yellowParallelogram = new MyParallelogram(this.scene);
    }

    display() {

        this.scaleFactor = 1;

        var dmd = [this.scaleFactor, 0.0, 0.0, 0.0,
            0.0, this.scaleFactor, 0.0, 0.0,
            0.0, 0.0, this.scaleFactor, 0.0,
            -4.2, 1.2, 0.0, 1.0];
        this.scene.pushMatrix();
        this.scene.multMatrix(dmd);
        this.scene.text4.apply();
        this.greenDiamond.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-5.2,2.2,0);
        this.scene.rotate(-90.0*Math.PI/180, 0, 0, 1);
        this.scene.text4.apply();
        this.redTriangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-3.2,2.2,0);
        this.scene.rotate(90*Math.PI/180, 0, 0, 1);
        this.scene.text4.apply();
        this.purpleTriangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-3.6,-1.2,0);
        this.scene.text4.apply();
        this.orangeTriangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1.4,0,0);
        this.scene.rotate(45*Math.PI/180, 0, 0, 1);
        this.scene.text4.apply();
        this.pinkTriangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,-2,0);
        this.scene.text4.apply();
        this.blueTriangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(1.5,-1.5,0);
        this.scene.scale(1,-1,1);
        this.scene.text4.apply();
        this.yellowParallelogram.display();
        this.scene.popMatrix();
    }

    enableNormalViz(){
        this.greenDiamond.enableNormalViz();
        this.orangeTriangle.enableNormalViz();
        this.purpleTriangle.enableNormalViz();
        this.redTriangle.enableNormalViz();
        this.yellowParallelogram.enableNormalViz();
        this.blueTriangle.enableNormalViz();
        this.pinkTriangle.enableNormalViz();
    }

    disableNormalViz(){
        this.greenDiamond.disableNormalViz();
        this.orangeTriangle.disableNormalViz();
        this.purpleTriangle.disableNormalViz();
        this.redTriangle.disableNormalViz();
        this.yellowParallelogram.disableNormalViz();
        this.blueTriangle.disableNormalViz();
        this.pinkTriangle.disableNormalViz();
    }

}
