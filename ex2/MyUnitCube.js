/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCube extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [
            1, 1, 1,    // 0 a
            1, -1, 1,   // 1 b
            -1, 1, 1,   // 2 c
            -1, -1, 1,  // 3 d
            1, 1, -1,   // 4 e
            1, -1, -1,  // 5 f
            -1, 1, -1,  // 6 g
            -1, -1, -1  // 7 h

        ];

        //Counter-clockwise reference of vertices
        this.indices = [
            //abcd
            0, 1, 2,
            2, 3, 1,
            1, 3, 2,
            2, 1, 0,
            //efgh
            4, 5, 6,
            6, 5, 7,
            6, 5, 4,
            7, 5, 6,
            //acge
            0, 2, 6,
            6, 2, 4,
            6, 2, 0,
            4, 2, 6,
            //bdhf
            1, 3, 5,
            5, 3, 7,
            5, 3, 1,
            7, 3, 5,
            //abfe
            0, 1, 4,
            4, 1, 5,
            4, 1, 0,
            5, 1, 4,
            //dcgh
            2, 3, 6,
            6, 3, 7,
            6, 3, 2,
            7, 3, 6
        ];

        //The defined indices (and corresponding vertices)
        //will be read in groups of three to draw triangles
        this.primitiveType = this.scene.gl.TRIANGLES;

        this.initGLBuffers();
    }

}