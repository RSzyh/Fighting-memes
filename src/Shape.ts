export class Rectangle {
    public element: SVGRectElement;
    private selfX: number;
    private selfy: number;
    private selfwidth: number;
    private selfheight: number;
    private fillColor: string;
    private strokeColor: string;
    private strokeWidth: number;

    constructor(x: number, y: number, width: number, height: number) {
        this.element = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    /**
     * this.x get & set
     */
    public get x(): number {
        return this.selfX;
    }

    public set x(newX: number) {
        this.selfX = newX;
        this.element.setAttribute("x", `${newX}px`);
    }

    /**
     * this.y get & set
     */
    public get y(): number {
        return this.selfy;
    }

    public set y(newY: number) {
        this.selfy = newY;
        this.element.setAttribute("y", `${newY}px`);
    }

    /**
     * this.width get & set
     */
    public get width(): number {
        return this.selfwidth;
    }

    public set width(newWidth: number) {
        this.selfwidth = newWidth;
        this.element.setAttribute("width", `${newWidth}px`);
    }

    /**
     * this.height get & set
     */
    public get height(): number {
        return this.selfheight;
    }

    public set height(newHeight: number) {
        this.selfheight = newHeight;
        this.element.setAttribute("height", `${newHeight}px`);
    }

    /**
     * setStroke
     */
    public setStroke(color: string, width: number) {
        this.strokeColor = color;
        this.strokeWidth = width;
        this.element.style.stroke = color;
        this.element.style.strokeWidth = `${width}px`;
    }
    /**
     * setFillColor
     */
    public setFillColor(color: string) {
        this.fillColor = color;
        this.element.style.fill = color;
    }
}