# For a regular polygon with n sides and perimeter p, we can find a new similar polygon by extending the radius from the center to each 
#vertex. Given the length of the new radius r, we'd like to find the difference in area between the two shapes.
def trapArea(n, p, r):
	#calculates the area of the first polygon from the length of a side
    smallArea = ((p / n)**2 * n) / (4 * math.tan(math.pi / n))
    #calculates the length of the second polygon from the given radius
    largeArea = ((r ** 2 * n) * math.sin(2 * math.pi / n)) / 2
                                  
    return round(largeArea - smallArea);

