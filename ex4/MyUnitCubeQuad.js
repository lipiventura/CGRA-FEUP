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

        //lado 1
        this.scene.pushMatrix();
        this.scene.translate(0,0,0.5);
        this.scene.textside.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.quad1.display();
        this.scene.popMatrix();

        //lado 2
        this.scene.pushMatrix();
        this.scene.translate(0,0,-0.5);
        this.scene.rotate(180*Math.PI/180,0,1,0);
        this.scene.textside.apply();
        this.quad1.display();
        this.scene.popMatrix();

        //lado 3
        this.scene.pushMatrix();
        this.scene.translate(0.5,0,0);
        this.scene.rotate(90*Math.PI/180,0,1,0);
        this.scene.textside.apply();
        this.quad1.display();
        this.scene.popMatrix();

        //lado 4
        this.scene.pushMatrix();
        this.scene.translate(-0.5,0,0);
        this.scene.rotate(-90*Math.PI/180,0,1,0);
        this.scene.textside.apply();
        this.quad1.display();
        this.scene.popMatrix();

        //base
        this.scene.pushMatrix();
        this.scene.translate(0,-0.5,0);
        this.scene.rotate(90*Math.PI/180,1,0,0);
        this.scene.textbtm.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.quad1.display();
        this.scene.popMatrix();

        //topo
        this.scene.pushMatrix();
        this.scene.translate(0,0.5,0);
        this.scene.rotate(-90*Math.PI/180,1,0,0);
        this.scene.texttop.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.quad1.display();
        this.scene.popMatrix();

    }

}