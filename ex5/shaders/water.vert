attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;
uniform float timeFactor;

varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform sampler2D uSampler2;
uniform float normScale;

void main() {
	vTextureCoord = aTextureCoord;

	vec3 offset=aVertexNormal*normScale*texture2D(uSampler2,vTextureCoord).b*0.005*sin(timeFactor);
    //texture2D().b > 0.5 identifica o branco (penso) e baseando-me em texture2 é
    //offset * texture2D().b, adiciono no gl_Position p vertice ser deslocado (?)

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition+offset, 1.0);
}
