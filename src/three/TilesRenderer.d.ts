import { Box3, Camera, Vector2, Matrix4, WebGLRenderer, Object3D, LoadingManager, Group } from 'three';
import { TilesRendererBase } from '../base/TilesRendererBase';
import { TilesGroup } from './TilesGroup';

export class TilesRenderer extends TilesRendererBase {

	autoDisableRendererCulling : Boolean;
	optimizeRaycast : Boolean;

	displayBoxBounds : Boolean;
	displaySphereBounds : Boolean;

	manager : LoadingManager;

	group : TilesGroup;

	parseTile( buffer: ArrayBuffer, tile: this, extension: string ) : Promise<Group>;

	getBoundsTransform(target: Matrix4) : Boolean;

	getBounds( box : Box3 ) : Boolean;

	hasCamera( camera : Camera ) : Boolean;
	setCamera( camera : Camera ) : Boolean;
	deleteCamera( camera : Camera ) : Boolean;

	setResolution( camera : Camera, x : Number, y : Number ) : Boolean;
	setResolution( camera : Camera, resolution : Vector2 ) : Boolean;
	setResolutionFromRenderer( camera : Camera, renderer : WebGLRenderer ) : Boolean;

	setTileVisible( tile: object, visible: boolean ) : void

	forEachLoadedModel( callback : ( scene : Object3D, tile : object ) => void ) : void;

	onLoadTileSet : ( ( tileSet : object ) => void ) | null;
	onLoadModel : ( ( scene : Object3D, tile : object ) => void ) | null;
	onDisposeModel : ( ( scene : Object3D, tile : object ) => void ) | null;

}
