/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {
    constructor(scene) {
        super(scene);
        this.quad1 = new MyQuad(this.scene);
    }
    display(){

        this.scene.pushMatrix();
        this.scene.translate(0,0,1);
        this.quad1.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,-1,0);
        this.scene.rotate(90*Math.PI/180,1,0,0);
        this.quad1.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,1,0);
        this.scene.rotate(-90*Math.PI/180,1,0,0);
        this.quad1.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,0,-1);
        this.quad1.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(1,0,0);
        this.scene.rotate(-90*Math.PI/180,0,1,0);
        this.quad1.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1,0,0);
        this.scene.rotate(-90*Math.PI/180,0,1,0);
        this.quad1.display();
        this.scene.popMatrix();

    }

}