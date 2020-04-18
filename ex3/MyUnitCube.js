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
            1, 1, 1,    // 1 a
            1, 1, 1,    // 2 a

            1, -1, 1,   // 3 b
            1, -1, 1,   // 4 b
            1, -1, 1,   // 5 b

            -1, 1, 1,   // 6 c
            -1, 1, 1,   // 7 c
            -1, 1, 1,   // 8 c

            -1, -1, 1,  // 9 d
            -1, -1, 1,  // 10 d
            -1, -1, 1,  // 11 d

            1, 1, -1,   // 12 e
            1, 1, -1,   // 13 e
            1, 1, -1,   // 14 e

            1, -1, -1,  // 15 f
            1, -1, -1,  // 16 f
            1, -1, -1,  // 17 f

            -1, 1, -1,  // 18 g
            -1, 1, -1,  // 19 g
            -1, 1, -1,  // 20 g

            -1, -1, -1, // 21 h
            -1, -1, -1, // 22 h
            -1, -1, -1, // 23 h

        ];

        //Counter-clockwise reference of vertices
        this.indices = [
            //abcd
            0, 6, 9,
            0, 9, 3,

            //efgh
            12, 15, 21,
            12, 21, 18,

            //acge
            13, 1, 4,
            13, 4, 16,

            //bdhf
            19, 22, 10,
            19, 10, 7,

            //abfe
            23, 17, 5,
            23, 5, 11,

            //dcgh
            14, 20, 8,
            14, 8, 2,

        ];

        this.normals = [

            0,0,1,
            1,0,0,
            0,1,0,

            0,0,1,
            1,0,0,
            0,-1,0,

            0,0,1,
            -1,0,0,
            0,1,0,

            0,0,1,
            -1,0,0,
            0,-1,0,

            0,0,-1,
            1,0,0,
            0,1,0,

            0,0,-1,
            1,0,0,
            0,-1,0,

            0,0,-1,
            -1,0,0,
            0,1,0,

            0,0,-1,
            -1,0,0,
            0,-1,0
        ];

        //The defined indices (and corresponding vertices)
        //will be read in groups of three to draw triangles
        this.primitiveType = this.scene.gl.TRIANGLES;

        this.initGLBuffers();
    }

}