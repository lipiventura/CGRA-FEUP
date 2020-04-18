/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.tangram = new MyTangram(this);
        this.unitcube = new MyUnitCube(this);
        this.quad = new MyQuad(this);
        this.cubequad = new MyUnitCubeQuad(this);

        //Objects connected to MyInterface
        this.displayAxis = true;
        this.scaleFactor = 1;

        this.displayTangram = false;
        this.displayUnitCube = false;
        this.displayQuad = false;
        this.displayBase = false;
        this.displayCubeQuad = false;
    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();
        
        // Draw axis
        if (this.displayAxis)
            this.axis.display();

        this.setDefaultAppearance();

        var sca = [this.scaleFactor, 0.0, 0.0, 0.0,
                    0.0, this.scaleFactor, 0.0, 0.0,
                    0.0, 0.0, this.scaleFactor, 0.0,
                    0.0, 0.0, 0.0, 1.0];

        this.multMatrix(sca);

        // ---- BEGIN Primitive drawing section

        if (this.displayTangram)
            this.tangram.display();

        if (this.displayUnitCube){
            this.pushMatrix();
            this.translate(0,0,-1.01);
            this.unitcube.display();
            this.popMatrix();
        }

        if (this.displayBase){
            this.pushMatrix();
            this.translate(1,-1,1);
            this.unitcube.display();
            this.translate(0.1,1,0);
            this.rotate(-90*Math.PI/180, 1,0,0);
            this.scale(0.2,0.2,0.2);
            this.tangram.display();
            this.popMatrix();
        }

        if (this.displayQuad)
            this.quad.display();

        if (this.displayCubeQuad)
            this.cubequad.display();

    }
}