import expect from "expect";

class ExpectWrapper extends Helper {

    assertEqual(a: any, b: any) {
        return expect(a).toEqual(b);
    }

    assertNotEqual(a: any, b: any) {
        return expect(a).not.toEqual(b);
    }

    assertContain(a: any, b: any) {
        return expect(a).toContain(b);
    }

    assertGreaterThan(a: any, b: any) {
        return expect(a).toBeGreaterThan(b);
    }

    assertNotEmpty(a: any) {
        return expect(a).not.toEqual('');
    }

    assertToBeTrue(a: any) {
        return expect(a).toBeTruthy;
    }

    assertToBeFalse(a: any) {
        return expect(a).toBeFalsy;
    }

    assertNotContain(a: any, b: any) {
        return expect(a).not.toContain(b);
    }

}

export = ExpectWrapper;
