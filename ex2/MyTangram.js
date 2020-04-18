/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
    constructor(scene) {
        super(scene);

        this.greenDiamond = new MyDiamond(this.scene);
        this.redTriangle = new MyTriangleSmall(this.scene);
        this.purpleTriangle = new MyTriangleSmall(this.scene);
        this.orangeTriangle = new MyTriangleBig(this.scene);
        this.pinkTriangle = new MyTriangle(this.scene);
        this.blueTriangle = new MyTriangleBig(this.scene);
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
        this.scene.setDiffuse(0,1,0,0);
        this.greenDiamond.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.translate(-5.2,2.2,0);
        this.scene.rotate(-90.0*Math.PI/180, 0, 0, 1);
        this.scene.setDiffuse(1,0,0,0);
        this.redTriangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-3.2,2.2,0);
        this.scene.rotate(90*Math.PI/180, 0, 0, 1);
        this.scene.setDiffuse(0.7, 0, 1, 0);
        this.purpleTriangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-3.6,-1.2,0);
        this.scene.setDiffuse(1,0.5,0,0);
        this.orangeTriangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1.4,0,0);
        this.scene.rotate(45*Math.PI/180, 0, 0, 1);
        this.scene.setDiffuse(1, 0, 1, 0);
        this.pinkTriangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,-2,0);
        this.scene.setDiffuse(0,0,1,0);
        this.blueTriangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(1.5,-1.5,0);
        this.scene.scale(1,-1,1);
        this.scene.setDiffuse(1,1,0,0);
        this.yellowParallelogram.display();
        this.scene.popMatrix();
    }

}
