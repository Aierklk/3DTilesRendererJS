import { Group, Matrix4 } from 'three';
import { TilesRenderer } from './TilesRenderer';

export class TilesGroup extends Group {

	tilesRenderer : TilesRenderer;
	name: string;
	isParentCallback (matrix4: Matrix4) : Matrix4;
	constructor( tilesRenderer : TilesRenderer );

}
