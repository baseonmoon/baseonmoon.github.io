// The code was build on top of the below author which can seen in the copyrigth mark which is taken from codepen
// And all the licences for the used models are above them where ther are loaded in code see blow.

/*!
Flag Animation
Copyright (c) 2023 by Wakana Y.K. (https://codepen.io/wakana-k/pen/wvNOqmX)
*/


"use strict";

import * as THREE from "three";

import { OrbitControls as e } from "three/addons/controls/OrbitControls.js";

import * as BufferGeometryUtils from "three/addons/utils/BufferGeometryUtils.js";

import { ParametricGeometry as t } from "three/addons/geometries/ParametricGeometry.js";

import { ParametricGeometries as o } from "three/addons/geometries/ParametricGeometries.js";
import { GLTFLoader } from "https://cdn.rawgit.com/mrdoob/three.js/master/examples/jsm/loaders/GLTFLoader.js";
window.mobileCheck = function () {
    let check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};

const inner_width_global = window.innerWidth;
const inner_heigth_global = window.innerHeight;

var cam_fov = 70;

if (mobileCheck()) cam_fov = 70;

// const inner_width_global = 996;
// const inner_heigth_global = 1174;



var model_pepe = null;
var model_rabbit = null;
var model_base = null;


// Materials
const textureLoader = new THREE.TextureLoader()
const bakedTexture = textureLoader.load('blu.png')
bakedTexture.flipY = false
bakedTexture.encoding = THREE.sRGBEncoding

const bakedMaterial = new THREE.MeshBasicMaterial({ map: bakedTexture })
//Loader
const loader = new GLTFLoader();
const loader2 = new GLTFLoader();
const loader3 = new GLTFLoader();



// Model Information:
// * title:	Pepe The Frog
// * source:	https://sketchfab.com/3d-models/pepe-the-frog-28a929586c2a4e1f965bafc8085a2e19
// * author:	OCBacon (https://sketchfab.com/OCBacon)

// Model License:
// * license type:	CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
// * requirements:	Author must be credited. Commercial use is allowed.

// If you use this 3D model in your project be sure to copy paste this credit wherever you share it:
// This work is based on "Pepe The Frog" (https://sketchfab.com/3d-models/pepe-the-frog-28a929586c2a4e1f965bafc8085a2e19) by OCBacon (https://sketchfab.com/OCBacon) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)

console.log("loading pepe")
await loader2.load('pepe.gltf',
    (gltf) => {
        gltf.scene.position.set(0, -0.7, 3.05)
        gltf.scene.rotation.set(-0.4, 0, 0)
        gltf.scene.scale.set(0.4, 0.4, 0.4);
        const model = gltf.scene;
        // model.traverse(child => child.material = bakedMaterial)
        model_pepe = model;
        // loading.style.display = 'none'
        console.log("loaded pepe")

    },
    (xhr) => {
        //console.log((xhr.loaded / xhr.total * 100) + '% loaded')
    }
)




// Model Information:
// * title:	Rabbit plush / Conejo Peluche
// * source:	https://sketchfab.com/3d-models/rabbit-plush-conejo-peluche-45e3b8b81f0444c68fd4bcb23ba9251e
// * author:	Andres Zuluaga (https://sketchfab.com/afzmtm)

// Model License:
// * license type:	CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
// * requirements:	Author must be credited. Commercial use is allowed.

// If you use this 3D model in your project be sure to copy paste this credit wherever you share it:
// This work is based on "Rabbit plush / Conejo Peluche" (https://sketchfab.com/3d-models/rabbit-plush-conejo-peluche-45e3b8b81f0444c68fd4bcb23ba9251e) by Andres Zuluaga (https://sketchfab.com/afzmtm) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)


console.log("loading rabbit")
await loader3.load('rabbit.gltf',
    (gltf) => {
        gltf.scene.position.set(-0.35, 1.68, 0)
        gltf.scene.rotation.set(0, 0, 0)
        gltf.scene.scale.set(0.1, 0.1, 0.1);
        const model = gltf.scene;
        // model.traverse(child => child.material = bakedMaterial)
        model_rabbit = model;
        console.log("loaded rabbit")

    },
    (xhr) => {
        //console.log((xhr.loaded / xhr.total * 100) + '% loaded')
    }
)


// custom made
const load_text = document.getElementById("loadtext");
console.log("loading base")
await loader.load('base.glb',
    (gltf) => {
        gltf.scene.position.set(0.0, -1.28, 0)
        gltf.scene.rotation.set(-0.0, 1.58, 0)
        gltf.scene.scale.set(0.3, 0.3, 0.3);
        const model = gltf.scene;
        model.traverse(child => child.material = bakedMaterial)
        model_base = model;
        console.log("loaded base")

    },
    (xhr) => {
        var text = Math.floor((xhr.loaded / xhr.total * 99)) + '% loaded';
        load_text.innerHTML = text;
    }
)



while (true) {
    console.log("here 1")
    await new Promise(r => setTimeout(r, 10));
    if (model_base != null && model_pepe != null && model_rabbit != null) break;
    console.log("here 2")
}



console.log("calling function")
!(function () {


    function s(e, t, o) {
        H.subVectors(t.position, e.position);
        const s = H.length();
        if (0 === s) return;
        const n = H.multiplyScalar(1 - o / s).multiplyScalar(0.5);
        e.position.add(n), t.position.sub(n);
    }


    function n() {
        (b.aspect = inner_width_global / inner_heigth_global),
            b.updateProjectionMatrix(),
            g.setSize(inner_width_global, inner_heigth_global);
    }


    function i(e) {
        requestAnimationFrame(i),
            (function (e) {
                T.set(100, 0, Math.sin(e / 1e3)), T.normalize(), T.multiplyScalar(300);
                const t = y.particles;
                if (a.enableWind) {
                    let e;
                    const o = new THREE.Vector3(),
                        s = G.index,
                        n = G.attributes.normal;
                    for (let i = 0, a = s.count; i < a; i += 3)
                        for (let a = 0; a < 3; a++)
                            (e = s.getX(i + a)),
                                o.fromBufferAttribute(n, e),
                                R.copy(o).normalize().multiplyScalar(o.dot(T)),
                                t[e].addForce(R);
                }
                for (let e = 0, o = t.length; e < o; e++) {
                    const o = t[e];
                    o.addForce(w), o.integrate(u);
                }
                const o = y.constraints,
                    n = o.length;
                for (let e = 0; e < n; e++) {
                    const t = o[e];
                    s(t[0], t[1], t[2]);
                }
                for (let e = 0, o = m.length; e < o; e++) {
                    let o = Math.round(m[e] * c + e);
                    o > t.length && (o = t.length), o < 0 && (o = 0);
                    const s = t[o];
                    s.position.copy(s.original), s.previous.copy(s.original);
                }
            })(e),
            v.update(),
            (function () {
                const e = y.particles;
                for (let t = 0, o = e.length; t < o; t++) {
                    const o = e[t].position;
                    G.attributes.position.setXYZ(t, o.x, o.y, o.z);
                }
                (G.attributes.position.needsUpdate = !0),
                    G.computeVertexNormals(),
                    (A.rotation.z -= 0.001),
                    g.render(S, b);
            })();
    }



    const a = {
        enableWind: !0
    },
        r = 0.97,
        l = 0.1,
        h = 25,
        c = 10,
        E =
            ((d = h * c),
                (p = 10 * h),
                function (e, t, o) {
                    const s = (e - 0.5) * d,
                        n = (t + 0.5) * p;
                    o.set(s, n, 0);
                });
    var d, p;
    const w = new THREE.Vector3(0, -981 * 1.4, 0).multiplyScalar(l),
        u = 0.018 * 0.018;
    let m = [];
    const T = new THREE.Vector3(0, 0, 0),
        R = new THREE.Vector3(),
        H = new THREE.Vector3();





    class M {
        constructor(e, t, o, s) {
            (this.position = new THREE.Vector3()),
                (this.previous = new THREE.Vector3()),
                (this.original = new THREE.Vector3()),
                (this.a = new THREE.Vector3(0, 0, 0)),
                (this.mass = s),
                (this.invMass = 1 / s),
                (this.tmp = new THREE.Vector3()),
                (this.tmp2 = new THREE.Vector3()),
                E(e, t, this.position),
                E(e, t, this.previous),
                E(e, t, this.original);
        }
        addForce(e) {
            this.a.add(this.tmp2.copy(e).multiplyScalar(this.invMass));
        }
        integrate(e) {
            const t = this.tmp.subVectors(this.position, this.previous);
            t.multiplyScalar(r).add(this.position),
                t.add(this.a.multiplyScalar(e)),
                (this.tmp = this.previous),
                (this.previous = this.position),
                (this.position = t),
                this.a.set(0, 0, 0);
        }
    }



    const y = new (class {
        constructor(e = 10, t = 10) {
            function o(t, o) {
                return t + o * (e + 1);
            }
            (this.w = e), (this.h = t);
            const s = [],
                n = [];
            for (let o = 0; o <= t; o++)
                for (let n = 0; n <= e; n++) s.push(new M(n / e, o / t, 0, l));
            for (let i = 0; i < t; i++)
                for (let t = 0; t < e; t++)
                    n.push([s[o(t, i)], s[o(t, i + 1)], h]),
                        n.push([s[o(t, i)], s[o(t + 1, i)], h]);
            for (let i = e, a = 0; a < t; a++)
                n.push([s[o(i, a)], s[o(i, a + 1)], h]);
            for (let i = t, a = 0; a < e; a++)
                n.push([s[o(a, i)], s[o(a + 1, i)], h]);
            (this.particles = s), (this.constraints = n), (this.index = o);
        }
    })(c, 10);
    let f, b, S, g, v, G, x, z, C, P, V, B, A, F, L;
    m = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


    const U = new THREE.TextureLoader();
    U.load(
        "moon3.webp",
        function (s) {
            ((F = s).anisotropy = 16),
                (F.colorSpace = THREE.SRGBColorSpace),
                U.load(
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Moon_texture.jpg/2560px-Moon_texture.jpg",
                    function (s) {
                        ((L = s).anisotropy = 16),
                            (function () {
                                (f = document.createElement("div")),
                                    document.body.appendChild(f),
                                    ((S = new THREE.Scene()).background = new THREE.Color(
                                        0
                                    )),
                                    (b = new THREE.PerspectiveCamera(
                                        cam_fov,
                                        inner_width_global / inner_heigth_global,
                                        0.001,
                                        100000
                                    )).position.set(0, 0.0, 20),
                                    S.add(new THREE.AmbientLight("white", 3));
                                const s = new THREE.DirectionalLight("white", 0.5);
                                S.rotation.set(0, -0.5, 0);
                                let i;
                                (s.position.y = 2),
                                    (s.position.z = 2),
                                    (s.castShadow = !0),
                                    (s.shadow.mapSize.width = 1024),
                                    (s.shadow.mapSize.height = 1024),
                                    //S.add(s),
                                    (P = new THREE.MeshPhongMaterial({
                                        specular: "silver",
                                        shininess: 100
                                    })),
                                    (G = new t(o.plane(y.w, y.h), 10, 10)).center(),
                                    (z = new THREE.MeshLambertMaterial({
                                        map: F,
                                        side: THREE.DoubleSide
                                    })),


                                    //flag pos
                                    (B = new THREE.Mesh(G, z)).position.set(0.8, 2.5, 0),
                                    B.scale.set(0.003, 0.003, 0.003),
                                    (B.castShadow = !0),
                                    S.add(B),
                                    (x = new THREE.BoxGeometry(10, 700, 10)),
                                    (z = new THREE.MeshLambertMaterial()),
                                    ((C = new THREE.Mesh(x, z)).position.x = -125),
                                    (C.position.y = 25),
                                    (C.receiveShadow = !0),
                                    (C.castShadow = !0),
                                    B.add(C),
                                    (x = new THREE.BoxGeometry(20, 10, 20)),
                                    ((C = new THREE.Mesh(x, P)).position.y = -320),
                                    (C.position.x = -125),
                                    (C.receiveShadow = !0),
                                    (C.castShadow = !0),
                                    B.add(C),
                                    (x = new THREE.SphereGeometry(3, 30, 30)),
                                    (z = new THREE.MeshPhongMaterial({
                                        color: "hsl(50,100%,87%)",
                                        map: L,
                                        bumpMap: L,
                                        bumpScale: 20
                                    })),


                                    // moon
                                    ((V = new THREE.Mesh(x, z)).position.y = -3.28),
                                    (V.receiveShadow = !0),
                                    (V.rotation.x = -Math.PI / 8);
                                //S.add(V);
                                S.add(model_pepe);
                                S.add(model_rabbit);
                                S.add(model_base);
                                let a,
                                    r,
                                    l = [];
                                (z = new THREE.MeshLambertMaterial({})),

                                    // body
                                    (l = []),
                                    (x = new THREE.CapsuleGeometry(0.5, 0.7, 4, 10)).translate(
                                        0,
                                        0,
                                        0
                                    ),
                                    l.push(x),

                                    //rigth foot
                                    (x = new THREE.CapsuleGeometry(0.18, 0.5, 4, 10)).translate(
                                        0.2,
                                        -1,
                                        0
                                    ),
                                    l.push(x),


                                    //left foot
                                    (x = new THREE.CapsuleGeometry(0.18, 0.5, 4, 10)).translate(
                                        -0.2,
                                        -1,
                                        0
                                    ),


                                    // head
                                    l.push(x),
                                    (x = new THREE.SphereGeometry(0.5, 10, 10)).translate(
                                        0,
                                        1.2,
                                        0
                                    ),

                                    // rigth ear
                                    l.push(x),
                                    (x = new THREE.CapsuleGeometry(0.15, 0.5, 4, 8)).translate(
                                        0.2,
                                        1.8,
                                        0
                                    ),

                                    //left ear
                                    l.push(x),
                                    (x = new THREE.CapsuleGeometry(0.15, 0.5, 4, 8)).translate(
                                        -0.2,
                                        1.8,
                                        0
                                    ),


                                    //body color
                                    l.push(x),
                                    (x = BufferGeometryUtils.mergeGeometries(l)),
                                    (z = z.clone()).color.set("bisque"),
                                    (i = new THREE.Mesh(x, z)),
                                    (x = new THREE.SphereGeometry(0.15, 5, 5)).translate(
                                        0,
                                        -0.3,
                                        -0.5
                                    ),

                                    //tail  color
                                    (z = z.clone()).color.set("white");


                                // eyes
                                const h = new THREE.Mesh(x, z);
                                (h.castShadow = !0),
                                    i.add(h),
                                    (x = new THREE.SphereGeometry(0.07, 10, 10)).translate(
                                        0.18,
                                        1.3,
                                        0.4
                                    ),


                                    // eyes
                                    (z = z.clone()).color.set("black");
                                const c = new THREE.Mesh(x, z);
                                i.add(c), (x = x.clone()).translate(-0.36, 0, 0);
                                const E = new THREE.Mesh(x, z);
                                i.add(E);



                                // hearth
                                const d = new THREE.Shape();
                                d.moveTo(25, 25),
                                    d.bezierCurveTo(25, 25, 20, 0, 0, 0),
                                    d.bezierCurveTo(-30, 0, -30, 35, -30, 35),
                                    d.bezierCurveTo(-30, 55, -10, 77, 25, 95),
                                    d.bezierCurveTo(60, 77, 80, 55, 80, 35),
                                    d.bezierCurveTo(80, 35, 80, 0, 50, 0),
                                    d.bezierCurveTo(35, 0, 25, 25, 25, 25),
                                    (x = new THREE.ExtrudeGeometry(d, {
                                        depth: 1,
                                        bevelEnabled: !0,
                                        bevelSegments: 5,
                                        steps: 1,
                                        bevelSize: 10,
                                        bevelThickness: 10
                                    })),
                                    (z = z.clone()).color.set("red");

                                // capsule
                                const p = new THREE.Mesh(x, z);
                                p.scale.set(0.003, 0.003, 0.003),
                                    p.position.set(0.07, 0.35, 0.5),
                                    p.rotateZ(Math.PI),
                                    i.add(p),
                                    (x = new THREE.SphereGeometry(1, 20, 20)).translate(
                                        0,
                                        1.6,
                                        0
                                    );

                                // head and capsule
                                let w = new THREE.MeshPhysicalMaterial({
                                    color: "white",
                                    specularColor: "black",
                                    ior: 1,
                                    transparent: !0,
                                    transmission: 1,
                                    roughness: 0,
                                    metalness: 0,
                                    thickness: 0.1,
                                    side: THREE.DoubleSide
                                });

                                const u = new THREE.Mesh(x, w);
                                i.add(u),
                                    (x = new THREE.BoxGeometry(0.7, 0.8, 0.3)),
                                    ((C = new THREE.Mesh(x, P)).position.y = 0.3),
                                    (C.position.z = -0.5),
                                    (C.receiveShadow = !0),
                                    (C.castShadow = !0),
                                    i.add(C),

                                    //left arm
                                    (x = new THREE.CapsuleGeometry(0.15, 0.8, 4, 10)).translate(
                                        0,
                                        -0.4,
                                        0
                                    ),
                                    (x.verticesNeedUpdate = !0),
                                    (z = z.clone()).color.set("white"),
                                    (a = new THREE.Mesh(x, z)).position.set(-0.4, 0.5, 0),
                                    a.rotation.set(0, 0, -Math.PI / 8),
                                    (a.castShadow = !0),
                                    i.add(a),

                                    //rigth arm
                                    (x = new THREE.CapsuleGeometry(0.15, 0.8, 4, 10)).translate(
                                        0,
                                        -0.4,
                                        0
                                    ),
                                    (x.verticesNeedUpdate = !0),
                                    (r = new THREE.Mesh(x, z)).position.set(0.25, 0.5, 0),
                                    r.rotation.set(0, 0, Math.PI / 2),
                                    (r.castShadow = !0),
                                    i.add(r),
                                    i.scale.set(0.2, 0.2, 0.2),
                                    i.position.set(0, 0, 0),
                                    (i.castShadow = !0),
                                    //S.add(i),

                                    // stars
                                    (z = new THREE.PointsMaterial({
                                        color: "white",
                                        size: 0.05,
                                        sizeAttenuation: !0
                                    }));
                                let m,
                                    T = new THREE.Color(),
                                    R = [],
                                    H = [],
                                    M = new THREE.Vector3();
                                x = new THREE.BufferGeometry();
                                for (let e = 0; e < 5e3; e++) {
                                    const e = Math.acos(THREE.MathUtils.randFloatSpread(2)),
                                        t = THREE.MathUtils.randFloatSpread(360);
                                    (M.x = 15 * Math.sin(e) * Math.cos(t)),
                                        (M.y = 15 * Math.sin(e) * Math.sin(t)),
                                        (M.z = 15 * Math.cos(e)),
                                        (m =
                                            0.5 *
                                            Math.sqrt(
                                                Math.sqrt(Math.random()) * Math.sqrt(Math.random())
                                            ) +
                                            0.5),
                                        M.copy(M).multiplyScalar(m),
                                        R.push(M.x, M.y, M.z),
                                        T.setHSL(0.2, 1, THREE.MathUtils.randFloat(0.9, 0.9)),
                                        H.push(T.r, T.g, T.b);
                                }
                                x.setAttribute(
                                    "position",
                                    new THREE.Float32BufferAttribute(R, 3)
                                ),
                                    x.setAttribute(
                                        "color",
                                        new THREE.Float32BufferAttribute(H, 3)
                                    ),
                                    (z.vertexColors = !0),
                                    ((A = new THREE.Points(x, z)).rotation.x = -Math.PI / 20),
                                    S.add(A),
                                    (g = new THREE.WebGLRenderer({
                                        antialias: !0
                                    })).setPixelRatio(1),
                                    g.setSize(inner_width_global, inner_heigth_global),
                                    (g.shadowMap.enabled = !0),
                                    f.appendChild(g.domElement),
                                    (v = new e(b, g.domElement)).target.set(0, 0.2, 0),
                                    (v.autoRotate = !0),
                                    (v.autoRotateSpeed = 1),
                                    (v.enableDamping = !0),
                                    (v.enablePan = !1),
                                    (v.maxPolarAngle = 0.5 * Math.PI),
                                    (v.minDistance = 1),
                                    (v.maxDistance = 8),
                                    v.update(),
                                    window.addEventListener("resize", n);
                            })(),
                            i(0);

                            const load_panel = document.getElementById("loadings");
                            load_panel.style.display = "none";
                    }
                );
}

);

}) ();


